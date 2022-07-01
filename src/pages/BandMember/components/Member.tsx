import React from 'react';
import {
  RedButton,
  YellowButton,
  GreenButton,
  EditPhoto,
} from 'components/svgs';

type BandMember = {
  name: string;
};

const Member: React.FC<BandMember> = (props) => {
  return (
    <>
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
          <GreenButton />
          <YellowButton />
          <RedButton />
        </div>
      </div>
    </>
  );
};

export default Member;
