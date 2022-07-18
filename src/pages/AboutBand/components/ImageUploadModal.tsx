import React, { useState, useContext } from 'react';
import { AuthContext } from 'store';
import { youtube } from 'assets';
import { ImageUploadModalForm, Close } from 'components';
import { BandImage, ImageUploadBand } from 'types';
import { changeBandLogo } from 'services';

const ImageUploadModal: React.FC<ImageUploadBand> = (props) => {
  const authCtx = useContext(AuthContext);
  const [error, setError] = useState<number | null>(null);
  const [showSubmitButton, setShowSubmitButton] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [bandImage, setBandImage] = useState<BandImage>({
    image: '',
    bandId: '',
  });
  const modalStateHandler = () => {
    props.setImageModalState(false);
  };

  const imageChangeHandler = (e: any) => {
    setBandImage({
      ...bandImage,
      image: e.target.files[0],
      bandId: props._id,
    });
    const imageSrc = URL.createObjectURL(e.target.files[0]);
    setImagePreview(imageSrc);
  };

  const imagePreviewHandler = () => {
    if (props.image <= 0 && !imagePreview) {
      return youtube;
    } else if (!imagePreview) {
      return `${process.env.REACT_APP_DOMAIN}/${props.image[0].imageUrl}`;
    } else {
      return imagePreview;
    }
  };

  const submitImage = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', bandImage.image);
    formData.append('bandId', bandImage.bandId);

    try {
      await changeBandLogo(authCtx.token, formData);
    } catch (error: any) {
      setError(error);
      throw new Error('Request failed!');
    }
    authCtx.refreshBand();
    props.setImageModalState(false);
  };

  return (
    <>
      <div
        onClick={modalStateHandler}
        className='fixed inset-0 z-40 opacity-95 bg-backdrop w-screen h-screen'
      ></div>

      <div className='flex flex-col items-center pt-16  w-[35rem] h-[35rem] 2xl:w-[50rem] 2xl:h-[50rem]  opacity-100 z-50 fixed rounded-lg bg-white top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'>
        <Close onClick={modalStateHandler} />
        <h1 className='text-base 2xl:text-2xl'>შეცვალე ბენდის პორტრეტი</h1>
        <div className='flex flex-col justify-between w-[80%] mb-4 items-center ml-[50%] mr-[50%] border-b-[1px] border-dark50 h-6 '></div>
        <div className='flex flex-col items-center gap-10 2xl:gap-20'>
          <div className='flex flex-col items-center mt-4 2xl:mt-16 w-[30rem]'>
            <div className='flex flex-col justify-center items-center py-16 rounded-full bg-backdrop border-[3px]  mb-6 border-white w-[15rem] h-[15rem] 2xl:w-[20rem] 2xl:h-[20rem] drop-shadow-5xl'>
              <img
                src={imagePreviewHandler()}
                alt='band-icon'
                className='w-[8rem] 2xl:min-w-[15rem]'
              />
            </div>
          </div>
          {error ? (
            <p className=' absolute bottom-10 text-red text-sm'>
              მოხდა შეცდომა, გთხოვ სცადო თავიდან
            </p>
          ) : (
            ''
          )}

          <ImageUploadModalForm
            onSubmit={submitImage}
            onChange={imageChangeHandler}
            showSubmitButton={showSubmitButton}
            setShowSubmitButton={setShowSubmitButton}
          />
        </div>
      </div>
    </>
  );
};

export default ImageUploadModal;
