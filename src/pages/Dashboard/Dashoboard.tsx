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
      <div className='flex items-center gap-20 relative  h-screen w-screen bg-gradient-radial-to-tr  from-grad1 to-grad2'>
        <div className=' w-[20%] h-[60%] bg-dark50 rounded-r-2xl border-[1px] border-l-dark50  border-white'>
          <ul className='flex flex-col gap-8 mt-16'>
            <li>
              <NavLink
                to='main'
                className={({ isActive }) =>
                  isActive
                    ? 'flex gap-2 pl-4 h-12 items-center text-dark50 bg-white'
                    : 'flex gap-2 pl-4 h-12 items-center text-white'
                }
              >
                <HomeIcon />
                <h2>მთავარი</h2>
              </NavLink>
            </li>
            <li>
              <NavLink
                to='band-members'
                className={({ isActive }) =>
                  isActive
                    ? 'flex gap-2 pl-4 h-12 items-center text-dark50 bg-white'
                    : 'flex gap-2 pl-4 h-12 items-center text-white'
                }
              >
                <MemberIcon />
                <h2>ჯგუფის წევრები</h2>
              </NavLink>
            </li>
            <li>
              <NavLink
                to='socials'
                className={({ isActive }) =>
                  isActive
                    ? 'flex gap-2 pl-4 h-12 items-center text-dark50 bg-white'
                    : 'flex gap-2 pl-4 h-12 items-center text-white'
                }
              >
                <YoutubeIcon />
                <h2>სოციალური ბმულები</h2>
              </NavLink>
            </li>
            <li>
              <NavLink
                to='about-band'
                className={({ isActive }) =>
                  isActive
                    ? 'flex gap-2 pl-4 h-12 items-center text-dark50 bg-white'
                    : 'flex gap-2 pl-4 h-12 items-center text-white'
                }
              >
                <NoteIcon />
                <h2>ბენდის შესახებ</h2>
              </NavLink>
            </li>
            <li>
              <NavLink
                to='another'
                className={({ isActive }) =>
                  isActive
                    ? 'flex gap-2 pl-4 h-12 items-center text-dark50 bg-white'
                    : 'flex gap-2 pl-4 h-12 items-center text-white'
                }
              >
                <DoorIcon />
                <h2>გადი გარეთ</h2>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Dashoboard;
