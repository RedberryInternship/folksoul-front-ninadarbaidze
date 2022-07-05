import React, { useState, useRef, useContext } from 'react';
import { Close } from 'components/svgs';
import axios from 'axios';
import AuthContext from 'store/AuthContext';
import { youtube } from 'assets/images';
import { Socialmage, ImageUploadDataSocials } from 'components';

const ImageUploadModal: React.FC<ImageUploadDataSocials> = (props) => {
  const fileRef = useRef<any>();
  const authCtx = useContext(AuthContext);

  const [showSubmitButton, setShowSubmitButton] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [memberImage, setMemberImage] = useState<Socialmage>({
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
    if (props.image <= 0 && !imagePreview) {
      return youtube;
    } else if (!imagePreview) {
      return `http://localhost:3000/${props.image[0].imageUrl}`;
    } else {
      return imagePreview;
    }
  };

  const submitImage = async (e: any) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    const formData = new FormData();
    formData.append('image', memberImage.image);
    formData.append('socialId', memberImage.socialId);

    try {
      await axios.post('http://localhost:3000/change-social-icon', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error: any) {
      throw new Error('Request failed!');
    }
    authCtx.refreshSocials();
    props.setImageModalState(false);
  };

  return (
    <>
      <div className='fixed inset-0 z-40 opacity-95 bg-backdrop w-screen h-screen'></div>

      <div className='flex flex-col items-center pt-16  w-[800px] h-[800px] opacity-100 z-50 fixed rounded-lg bg-white top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'>
        <Close onClick={modalStateHandler} />
        <h1 className='text-2xl'>შეცვალე სოციალური ბმულის ხატულა</h1>
        <div className='flex flex-col justify-between w-[80%] mb-4 items-center ml-[50%] mr-[50%] border-b-[1px] border-dark50 h-6 '></div>
        <div className='flex flex-col items-center gap-20'>
          <div className='flex flex-col items-center mt-16  w-[30rem]'>
            <h1 className='text-3xl'>{props.name}</h1>
            <div className='flex flex-col justify-center items-center py-16 '>
              <img src={imagePreviewHandler()} alt='' className='w-[12rem] ' />
            </div>
          </div>
          <form onSubmit={submitImage} encType='multipart/form-data'>
            <input
              type='file'
              accept='.png, .jpg, .jpeg'
              name='image'
              ref={fileRef}
              onChange={imageChangeHandler}
              hidden
            />
            {!showSubmitButton && (
              <button
                onClick={() => {
                  fileRef.current.click();
                  setShowSubmitButton(true);
                }}
                className='w-[250px] h-[60px] rounded-[5px] text-white text-2xl bg-backdrop'
              >
                ატვირთე
              </button>
            )}

            {showSubmitButton && (
              <button
                type='submit'
                className='w-[250px] h-[60px] rounded-[5px] text-white text-2xl bg-green'
              >
                შეინახე
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default ImageUploadModal;
