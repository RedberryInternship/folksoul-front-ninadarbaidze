// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { RedButton, YellowButton, EditPhoto } from 'components/svgs';
// import { Modal, MemberData } from 'components';
// import { ImageUploadModal } from 'pages/BandMember/components';
import axios from 'axios';
import { youtube } from 'assets/images';

type Socials = {
  _id: string;
  name: string;
  url: string;
  image: [];
  fetchData: () => void;
};

const Social: React.FC<Socials> = (props) => {
  //   const navigate = useNavigate();
  //   const [modalState, setModalState] = useState(false);
  //   const [imageModalState, setImageModalState] = useState(false);

  const openImagePickerHandler = () => {
    //   setImageModalState(true);
  };

  const editMemberHandler = () => {
    //   navigate('/dashoboard/band-members/new-member', {
    //     state: {
    //       id: props._id,
    //       name: props.name,
    //       instrument: props.instrument,
    //       orbitLength: props.orbitLength,
    //       color: props.color,
    //       biography: props.biography,
    //     },
    //   });
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
      <div className='flex justify-around items-center w-[60rem] h-[4rem] bg-dark50  border-[1px] rounded-[5px] drop-shadow-4xl'>
        <div className='relative'>
          <img src={youtube} alt='social-icon' className='w-[3rem] ' />
          <EditPhoto
            onClick={openImagePickerHandler}
            className='absolute w-[20px] top-[50%] left-[60%]  cursor-pointer'
          />
        </div>
        <h1 className='text-white text-2xl'>{props.name}</h1>
        <p className='text-link underline'>{props.url}</p>
        <div className='flex justify-center items-center gap-14'>
          <YellowButton onClick={editMemberHandler} />
          <RedButton onClick={deleteMemberHandler} />
        </div>
      </div>
    </>
  );
};

export default Social;
