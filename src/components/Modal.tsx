import React from 'react';
import { Close } from 'components';
import { memberIcon } from 'assets';
import { ModalDataMembers } from 'types';

const Modal: React.FC<ModalDataMembers> = (props) => {
  const modalStateHandler = () => {
    props.setModalState(false);
  };
  return (
    <>
      <div
        onClick={modalStateHandler}
        className='fixed inset-0 z-40 opacity-95 bg-backdrop w-screen h-screen'
      ></div>

      <div className='flex flex-col items-center pt-16  w-[35rem] h-[35rem] 2xl:w-[50rem] 2xl:h-[50rem] opacity-100 z-50 fixed rounded-lg bg-white top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'>
        <Close onClick={modalStateHandler} />
        <h1 className='text-base 2xl:text-2xl'>
          {props.name}~{props.instrument}
        </h1>
        <div className='flex flex-col justify-between w-[80%] mb-4 items-center ml-[50%] mr-[50%] border-b-[1px] border-dark50 h-6 '></div>
        <div className='scrollbar flex flex-col items-center my-4 mx-4 overflow-x-clip overflow-y-auto'>
          <div
            className='flex flex-col justify-center items-center py-16 rounded-full  border-[1px] mt-2  mb-6 border-white w-[8rem] h-[8rem] 2xl:w-[10rem] 2xl:h-[10rem] drop-shadow-5xl'
            style={{ backgroundColor: props.color }}
          >
            <img
              src={
                props.image.length > 0
                  ? `${process.env.REACT_APP_API_URL}/${props.image[0].imageUrl}`
                  : memberIcon
              }
              alt='member-icon'
              className='w-[6rem] 2xl:w-[8rem]'
            />
          </div>
          <h1 className='text-xs 2xl:text:xl'>
            ორბიტალური დაშორება:
            <span className='font-bold'>{props.orbitLength}</span>
          </h1>
          <p className='mt-6 mx-16 text-xs 2xl:text-xl h-[360px]'>
            {props.biography}
          </p>
        </div>
      </div>
    </>
  );
};

export default Modal;
