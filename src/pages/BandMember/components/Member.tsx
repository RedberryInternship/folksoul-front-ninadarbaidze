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
      await axios.delete('http://localhost:3000/delete-member/' + props._id, {
        headers: { Authorization: `Bearer ${token}` },
      });
      props.fetchData();
    } catch (error: any) {
      throw new Error('Request failed!');
    }
  };

  console.log(props.color);

  return (
    <>
      {modalState && <Modal {...props} setModalState={setModalState} />}
      {imageModalState && (
        <ImageUploadModal {...props} setImageModalState={setImageModalState} />
      )}

      <div className='flex flex-col justify-between items-center w-[15rem] h-[20rem] bg-dark50 border-[1px] rounded-sm drop-shadow-4xl'>
        <div
          style={{ backgroundColor: `${props.color}` }}
          className={`flex flex-col justify-center items-center relative rounded-full  border-[1px] mt-4 border-white w-[11rem] h-[11rem]`}
        >
          <img
            src={
              props.image.length > 0
                ? `http://localhost:3000/${props.image[0].imageUrl}`
                : memberIcon
            }
            alt=''
            className='w-[9rem]'
          />
          <EditPhoto
            onClick={openImagePickerHandler}
            className='w-[40px] absolute ml-32 mt-24 cursor-pointer'
          />
        </div>
        <h1 className='text-white text-2xl'>{props.name}</h1>
        <div className='flex justify-center items-center gap-14 border-t-[1px] h-12 w-full drop-shadow-4xl'>
          <GreenButton onClick={showMemberHandler} />
          <YellowButton onClick={editMemberHandler} />
          <RedButton onClick={deleteMemberHandler} />
        </div>
      </div>
    </>
  );
};

export default Member;
