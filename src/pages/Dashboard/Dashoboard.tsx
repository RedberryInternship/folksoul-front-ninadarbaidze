import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  HomeIcon,
  MemberIcon,
  YoutubeIcon,
  NoteIcon,
  DoorIcon,
} from 'components/svgs';

const Dashoboard = () => {
  return (
    <>
      <div className='flex items-center gap-20  h-screen w-screen bg-gradient-radial-to-tr  from-grad1 to-grad2'>
        <div className=' w-[20%] h-[60%] bg-dark50 rounded-r-2xl border-[1px] border-l-dark50  border-white'>
          <ul className='flex flex-col gap-12 mt-16 ml-4'>
            <li className='flex gap-2 text-white'>
              <HomeIcon />
              <h2>მთავარი</h2>
            </li>
            <li className='flex gap-2 text-white'>
              <MemberIcon />
              <h2>ჯგუფის წევრები</h2>
            </li>
            <li className='flex gap-2 text-white'>
              <YoutubeIcon />
              <h2>სოციალური ბმულები</h2>
            </li>
            <li className='flex gap-2 text-white'>
              <NoteIcon />
              <h2>ბენდის შესახებ</h2>
            </li>
            <li className='flex gap-2 text-white'>
              <DoorIcon />
              <h2>გადი გარეთ</h2>
            </li>
          </ul>
        </div>
        <div className=' w-[70%] h-[80%] bg-white rounded-[20px] shadow-innerSh'></div>
      </div>
    </>
  );
};

export default Dashoboard;
