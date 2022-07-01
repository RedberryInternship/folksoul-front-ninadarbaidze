import React from 'react';
import {
  RedButton,
  YellowButton,
  GreenButton,
  EditPhoto,
} from 'components/svgs';

const BandMember = () => {
  return (
    <>
      <div className='flex flex-col pt-16 items-center w-[70%] h-[80%] absolute top-[10%] left-[25%] bg-white rounded-[20px] shadow-innerSh'>
        <h1 className='text-lg '>ბენდის წევრები</h1>
        <div className='flex flex-col justify-between w-[70%] mb-16 items-center ml-[8%] mr-[8%] border-b-[1px] border-dark50 h-6'></div>

        {/* group members */}
        <div className='flex flex-col justify-between items-center w-[16%] h-[36%] bg-dark50 border-[1px] rounded-sm drop-shadow-4xl'>
          <div className='flex flex-col justify-center items-center relative rounded-full bg-backdrop border-[0.1px] mt-4 border-white w-20 h-20'>
            <img
              src='https://images.vexels.com/media/users/3/129515/isolated/preview/7fb084074c0ee8cfc07d1b9cebcb977f-boy-cartoon-head.png'
              alt=''
              className='w-16'
            />
            <EditPhoto className='w-[20px] absolute ml-16 mt-12' />
          </div>
          <h1 className='text-white'>ნინა</h1>
          <div className='flex justify-center items-center gap-10 border-t-[1px] h-8 w-full drop-shadow-4xl'>
            <GreenButton />
            <YellowButton />
            <RedButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default BandMember;
