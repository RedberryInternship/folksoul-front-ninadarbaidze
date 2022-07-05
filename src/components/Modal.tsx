import React from 'react';
import { Close } from 'components/svgs';
import { memberIcon } from 'assets/images';
import { ModalDataMembers } from 'components';

const Modal: React.FC<ModalDataMembers> = (props) => {
  const modalStateHandler = () => {
    props.setModalState(false);
  };
  return (
    <>
      <div className='fixed inset-0 z-40 opacity-95 bg-backdrop w-screen h-screen'></div>

      <div className='flex flex-col items-center pt-16  w-[800px] h-[800px] opacity-100 z-50 fixed rounded-lg bg-white top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'>
        <Close onClick={modalStateHandler} />
        <h1 className='text-2xl'>
          {props.name}~{props.instrument}
        </h1>
        <div className='flex flex-col justify-between w-[80%] mb-4 items-center ml-[50%] mr-[50%] border-b-[1px] border-dark50 h-6 '></div>
        <div className='flex flex-col items-center mt-4 overflow-scroll'>
          <div className='flex flex-col justify-center items-center py-16 rounded-full bg-backdrop border-[1px]  mb-6 border-white w-[10rem] h-[10rem] drop-shadow-5xl'>
            <img
              src={
                props.image.length > 0
                  ? `http://localhost:3000/${props.image[0].imageUrl}`
                  : memberIcon
              }
              alt=''
              className='w-[100px]'
            />
          </div>
          <h1>
            ორბიტალური დაშორება:{' '}
            <span className=' font-bold'>{props.orbitLength}</span>
          </h1>
          <p className='mt-6 mx-16 text-xl h-[360px]'>{props.biography}</p>
        </div>
      </div>
    </>
  );
};

export default Modal;
