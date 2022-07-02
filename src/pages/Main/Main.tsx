import React from 'react';
import { LoginForm } from 'components';
import { TvFeet, TvSatelite } from 'components/svgs';

const Main = () => {
  return (
    <>
      <div className='fixed bg-backdrop w-screen h-screen'></div>
      <div className='flex flex-col pt-20 items-center w-[70%] h-[80%] absolute top-[10%] left-[25%] bg-white rounded-[20px] shadow-innerSh'>
        <h1 className=' text-4xl'>დილამშვიდობისა!</h1>
        <div className='flex flex-col items-center pt-20'>
          <TvSatelite />
          <img
            src='https://store-images.s-microsoft.com/image/apps.18676.69332955897062199.e13143ee-35a2-4de0-829b-a69ffddcd17d.a292f2f1-0ce2-46be-b742-01b3a75e3bd5?mode=scale&q=90&h=1080&w=1920&background=%23FFFFFF'
            alt=''
            className='h-[15vw] border-[16px]'
          />
          <TvFeet />
        </div>
      </div>
    </>
  );
};

export default Main;
