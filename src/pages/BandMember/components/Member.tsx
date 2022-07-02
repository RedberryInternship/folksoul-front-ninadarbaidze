import React, { useState } from 'react';
import {
  RedButton,
  YellowButton,
  GreenButton,
  EditPhoto,
} from 'components/svgs';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'components';

export type Data = {
  _id: string;
  name: string;
  instrument: string;
  orbitLength: number;
  color: string;
  biography: string;
};

const Member: React.FC<Data> = (props) => {
  const [modalState, setModalState] = useState(false);
  // const navigate = useNavigate();
  const editMemberHandler = () => {
    // console.log(props._id);
  };
  const showMemberHandler = () => {
    setModalState(true);
  };
  return (
    <>
      {modalState && <Modal {...props} setModalState={setModalState} />}

      <div className='flex flex-col justify-between items-center w-[15rem] h-[20rem] bg-dark50 border-[1px] rounded-sm drop-shadow-4xl'>
        <div className='flex flex-col justify-center items-center relative rounded-full bg-backdrop border-[1px] mt-4 border-white w-[11rem] h-[11rem]'>
          <img
            src='https://images.vexels.com/media/users/3/129515/isolated/preview/7fb084074c0ee8cfc07d1b9cebcb977f-boy-cartoon-head.png'
            alt=''
            className='w-[150px]'
          />
          <EditPhoto className='w-[40px] absolute ml-32 mt-24' />
        </div>
        <h1 className='text-white text-2xl'>{props.name}</h1>
        <div className='flex justify-center items-center gap-14 border-t-[1px] h-12 w-full drop-shadow-4xl'>
          <GreenButton onClick={showMemberHandler} />
          <YellowButton onClick={editMemberHandler} />
          <RedButton />
        </div>
      </div>
    </>
  );
};

export default Member;
