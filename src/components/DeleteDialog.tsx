import React from 'react';
import { DeleteModal } from 'types';

const Modal: React.FC<DeleteModal> = (props) => {
  return (
    <>
      <div className='fixed inset-0 z-40 opacity-60 bg-backdrop w-screen h-screen'></div>
      <div className='flex flex-col items-center justify-center  w-[20rem] h-[12rem] 2xl:w-[20rem] 2xl:h-[12rem] opacity-100 z-50 fixed rounded-lg bg-white top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'>
        <h1 className='font-bold text-xl'>ნამდვილად წავშალო?</h1>
        <nav className='flex gap-5 pt-9'>
          <button
            className='w-16 h-8 bg-red text-base rounded-2xl text-white'
            onClick={props.deleteMemberHandler}
          >
            კი
          </button>
          <button
            className='w-16 h-8 bg-green text-base rounded-2xl text-white'
            onClick={props.cancelDeleting}
          >
            არა
          </button>
        </nav>
      </div>
    </>
  );
};

export default Modal;
