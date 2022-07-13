import React, { useState, useContext } from 'react';
import { Close } from 'components/svgs';
import axios from 'axios';
import { AuthContext } from 'store';
import { memberIcon } from 'assets/images';
import { ImageUploadModalForm } from 'components';
import { Image, ImageUploadData } from 'types';

const ImageUploadModal: React.FC<ImageUploadData> = (props) => {
  const authCtx = useContext(AuthContext);

  const [showSubmitButton, setShowSubmitButton] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [memberImage, setMemberImage] = useState<Image>({
    image: '',
    memberId: '',
  });
  const modalStateHandler = () => {
    props.setImageModalState(false);
  };

  const imageChangeHandler = (e: any) => {
    setMemberImage({
      ...memberImage,
      image: e.target.files[0],
      memberId: props._id,
    });
    const imageSrc = URL.createObjectURL(e.target.files[0]);
    setImagePreview(imageSrc);
  };

  const imagePreviewHandler = () => {
    if (props.image <= 0 && !imagePreview) {
      return memberIcon;
    } else if (!imagePreview) {
      return `${process.env.REACT_APP_DOMAIN}/${props.image[0].imageUrl}`;
    } else {
      return imagePreview;
    }
  };

  const submitImage = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', memberImage.image);
    formData.append('memberId', memberImage.memberId);

    try {
      await axios.post(
        `${process.env.REACT_APP_DOMAIN}/change-avatar`,
        formData,
        {
          headers: { Authorization: `Bearer ${authCtx.token}` },
        }
      );
    } catch (error: any) {}
    authCtx.refreshMembers();
    props.setImageModalState(false);
  };

  return (
    <>
      <div className='fixed inset-0 z-40 opacity-95 bg-backdrop w-screen h-screen'></div>

      <div className='flex flex-col items-center  pt-16 w-[35rem] h-[35rem] 2xl:w-[50rem] 2xl:h-[50rem] opacity-100 z-50 fixed rounded-lg bg-white top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'>
        <Close onClick={modalStateHandler} />
        <h1 className='text-base 2xl:text-2xl'>
          შეცვალე ჯგუფის წევრის ავატარი
        </h1>
        <div className='flex flex-col justify-between w-[80%] mb-4 items-center ml-[50%] mr-[50%] border-b-[1px] border-dark50 h-6 '></div>
        <div className='flex flex-col items-center gap-10 2xl:gap-20'>
          <div className='flex flex-col items-center mt-4 2xl:mt-16  w-[30rem]'>
            <div className='flex flex-col justify-center items-center py-16 rounded-full bg-backdrop border-[3px]  mb-6 border-white w-[15rem] h-[15rem] 2xl:w-[20rem] 2xl:h-[20rem] drop-shadow-5xl'>
              <img
                src={imagePreviewHandler()}
                alt='band-member-icon'
                className='w-[10rem] 2xl:w-[12rem] '
              />
            </div>
          </div>
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
