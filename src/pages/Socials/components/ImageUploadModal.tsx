import React, { useState, useContext, FormEvent } from 'react';
import { changeSocialLogo } from 'services';
import { AuthContext } from 'store';
import { SocialImage, ImageUploadDataSocials } from 'types';
import { youtube } from 'assets';
import { ImageUploadModalForm, Close } from 'components';

const ImageUploadModal: React.FC<ImageUploadDataSocials> = (props) => {
  const authCtx = useContext(AuthContext);
  const [error, setError] = useState<number | null>(null);
  const [showSubmitButton, setShowSubmitButton] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [memberImage, setMemberImage] = useState<SocialImage>({
    image: '',
    socialId: '',
  });
  const modalStateHandler = () => {
    props.setImageModalState(false);
  };

  const imageChangeHandler = (e: any) => {
    setMemberImage({
      ...memberImage,
      image: e.target.files[0],
      socialId: props._id,
    });
    const imageSrc = URL.createObjectURL(e.target.files[0]);
    setImagePreview(imageSrc);
  };

  const imagePreviewHandler = () => {
    if (props.image.length <= 0 && !imagePreview) {
      return youtube;
    } else if (!imagePreview) {
      return `${process.env.REACT_APP_API_URL}/${props.image[0].imageUrl}`;
    } else {
      return imagePreview;
    }
  };

  const submitImage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', memberImage.image);
    formData.append('socialId', memberImage.socialId);

    try {
      await changeSocialLogo(authCtx.token, formData);
    } catch (error: any) {
      setError(error);
      throw new Error('Request failed!');
    }
    authCtx.refreshSocials();
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
        <h1 className='text-base 2xl:text-2xl'>
          შეცვალე სოციალური ბმულის ხატულა
        </h1>
        <div className='flex flex-col justify-between w-[80%] mb-4 items-center ml-[50%] mr-[50%] border-b-[1px] border-dark50 h-6 '></div>
        <div className='flex flex-col items-center gap-10 2xl:gap-20'>
          <div className='flex flex-col items-center mt-4 2xl:mt-16 w-[30rem]'>
            <h1 className='text-xl 2xl:text-3xl'>{props.name}</h1>
            <div className='flex flex-col justify-center items-center py-16 h-48'>
              <img
                src={imagePreviewHandler()}
                alt='social-icon'
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
