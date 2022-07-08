import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RedButton, YellowButton, EditPhoto } from 'components/svgs';
import { ImageUploadModal } from 'pages/Socials/components';
import axios from 'axios';
import { youtube } from 'assets/images';
import { Socials } from 'components';

const Social: React.FC<Socials> = (props) => {
  const navigate = useNavigate();
  const [imageModalState, setImageModalState] = useState(false);

  const openImagePickerHandler = () => {
    setImageModalState(true);
  };

  const editMemberHandler = () => {
    navigate('/dashoboard/socials/new-social', {
      state: {
        id: props._id,
        name: props.name,
        url: props.url,
      },
    });
  };

  const deleteMemberHandler = async () => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete('http://localhost:3000/delete-social/' + props._id, {
        headers: { Authorization: `Bearer ${token}` },
      });
      props.fetchData();
    } catch (error: any) {
      throw new Error('Request failed!');
    }
  };

  return (
    <>
      {imageModalState && (
        <ImageUploadModal {...props} setImageModalState={setImageModalState} />
      )}

      <div className='flex justify-start gap-[10%] pl-[5%] items-center w-[40rem] h-[3rem] 2xl:w-[50rem] 2xl:h-[4rem] bg-dark50  border-[1px] rounded-[5px] drop-shadow-4xl'>
        <div className='relative max-w-[50px]'>
          <img
            src={
              props.image.length > 0
                ? `http://localhost:3000/${props.image[0].imageUrl}`
                : youtube
            }
            alt='social-icon'
            className='w-[4rem] 2xl:w-[5rem]'
          />
          <EditPhoto
            onClick={openImagePickerHandler}
            className='absolute w-[1rem] 2xl:w-[1.5rem] top-[50%] left-[60%]  cursor-pointer'
          />
        </div>
        <h1 className='text-white text-base 2xl:text-2xl'>{props.name}</h1>
        <p className='text-link2 underline text-base 2xl:text-xl'>
          {props.url}
        </p>
        <div className='flex justify-end items-center pr-[5%] w-[20rem] gap-14'>
          <YellowButton onClick={editMemberHandler} />
          <RedButton onClick={deleteMemberHandler} />
        </div>
      </div>
    </>
  );
};

export default Social;
