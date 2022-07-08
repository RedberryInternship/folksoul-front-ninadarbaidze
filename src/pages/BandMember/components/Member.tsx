import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  RedButton,
  YellowButton,
  GreenButton,
  EditPhoto,
} from 'components/svgs';
import { memberIcon } from 'assets/images';
import { Modal, MemberData } from 'components';
import { ImageUploadModal } from 'pages/BandMember/components';
import axios from 'axios';

const Member: React.FC<MemberData> = (props) => {
  const navigate = useNavigate();
  const [modalState, setModalState] = useState(false);
  const [imageModalState, setImageModalState] = useState(false);

  const openImagePickerHandler = () => {
    setImageModalState(true);
  };

  const showMemberHandler = () => {
    setModalState(true);
  };

  const editMemberHandler = () => {
    navigate('/dashoboard/band-members/new-member', {
      state: {
        id: props._id,
        name: props.name,
        instrument: props.instrument,
        orbitLength: props.orbitLength,
        color: props.color,
        biography: props.biography,
      },
    });
  };

  const deleteMemberHandler = async () => {
    const token = localStorage.getItem('token');

    try {
      await axios.delete(
        `${process.env.REACT_APP_DOMAIN}/delete-member/${props._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      props.fetchData();
    } catch (error: any) {
      throw new Error('Request failed!');
    }
  };

  return (
    <>
      {modalState && <Modal {...props} setModalState={setModalState} />}
      {imageModalState && (
        <ImageUploadModal {...props} setImageModalState={setImageModalState} />
      )}

      <div className='flex flex-col justify-between items-center w-[10rem] h-[13rem] 2xl:w-[15rem] 2xl:h-[20rem] bg-dark50 border-[1px] rounded-sm drop-shadow-4xl'>
        <div
          style={{ backgroundColor: `${props.color}` }}
          className={`flex flex-col justify-center items-center relative rounded-full  border-[1px] mt-4 border-white w-[7rem] h-[7rem] 2xl:w-[11rem] 2xl:h-[11rem]`}
        >
          <img
            src={
              props.image.length > 0
                ? `${process.env.REACT_APP_DOMAIN}/${props.image[0].imageUrl}`
                : memberIcon
            }
            alt=''
            className='h-[6rem] 2xl:h-[8rem]'
          />
          <EditPhoto
            onClick={openImagePickerHandler}
            className='w-[30px] 2xl:w-[40px] absolute ml-20 mt-20 2xl:ml-32 2xl:mt-24 cursor-pointer'
          />
        </div>
        <h1 className='text-white text-base 2xl:text-2xl'>{props.name}</h1>
        <div className='flex justify-center items-center gap-10 2xl:gap-14 border-t-[1px] h-8 2xl:h-12 w-full drop-shadow-4xl'>
          <GreenButton onClick={showMemberHandler} />
          <YellowButton onClick={editMemberHandler} />
          <RedButton onClick={deleteMemberHandler} />
        </div>
      </div>
    </>
  );
};

export default Member;
