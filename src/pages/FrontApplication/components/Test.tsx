import React from 'react';

const Test = () => {
  return (
    <>
      <div className='w-1/2 ml-[500px] mt-[300px] flex items-center  justify-center'>
        <img
          src='https://folksoul.omar.redberryinternship.ge/static/media/sun.d8f373e38de0158f4c4f.png'
          alt='sun'
          className='w-24 h-24 z-50 cursor-pointer animate-pulse absolute'
        />
        <div className='relative flex justify-center items-center'>
          <div
            className=' absolute border-yellow2  border-dashed border-[1px] rounded-full '
            style={{
              width: '200px',
              height: '200px',
              marginLeft: '-100px',
              marginTop: '-100px',
            }}
          ></div>
          <div
            className='earth-spin absolute  shadow-sm flex flex-col justify-center left-10  items-center'
            style={{
              width: '200px',
              height: '200px',
              marginLeft: '-100px',
              marginTop: '-100px',
              animationPlayState: 'running',
            }}
          >
            <img
              id='earth'
              className='w-14 h-14 cursor-pointer border-4 border-specialYellow flex justify-center items-center rounded-full object-cover object-center'
              src='https://folksoul-api.omar.redberryinternship.ge/images/avatar-smartphone-g8e7c64228_640.jpg'
              alt='icon'
              style={{
                animationPlayState: 'running',
                backgroundColor: 'rgb(255, 243, 67)',
              }}
            />
          </div>
        </div>
        <div className='relative flex justify-center items-center'>
          <div
            className='border-yellow2  border-dashed border-[1px] rounded-full '
            style={{
              width: '200px',
              height: '200px',
              marginLeft: '-100px',
              marginTop: '-100px',
            }}
          ></div>
          <div
            className='earth-spin  shadow-sm flex flex-col justify-center left-10  items-center'
            style={{
              width: '400px',
              height: '400px',
              marginLeft: '-200px',
              marginTop: '-200px',
              animationPlayState: 'running',
            }}
          >
            <img
              id='earth'
              className='w-14 h-14 cursor-pointer border-4 border-specialYellow flex justify-center items-center rounded-full object-cover object-center'
              src='https://folksoul-api.omar.redberryinternship.ge/images/avatar-smartphone-g8e7c64228_640.jpg'
              alt='icon'
              style={{
                animationPlayState: 'running',
                backgroundColor: 'rgb(255, 243, 67)',
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
