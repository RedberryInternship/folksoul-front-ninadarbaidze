import { useContext } from 'react';
import { AuthContext } from 'store';
import { Outlet } from 'react-router-dom';
import {
  HomeIcon,
  MemberIcon,
  YoutubeIcon,
  NoteIcon,
  DoorIcon,
} from 'components/svgs';
import { DashboardWrapper, DashboardNavs } from 'pages/Dashboard/components';

const Dashoboard = () => {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <DashboardWrapper>
        <DashboardNavs destination={'main'}>
          <HomeIcon />
          <h2 className='text-[20px] 2xl:text-[24px] pt-1'>მთავარი</h2>
        </DashboardNavs>

        <DashboardNavs destination={'band-members'}>
          <MemberIcon />
          <h2 className='text-[20px] 2xl:text-[24px]  pt-1'>ჯგუფის წევრები</h2>
        </DashboardNavs>

        <DashboardNavs destination={'socials'}>
          <YoutubeIcon />
          <h2 className='text-[20px] 2xl:text-[24px]  pt-1'>
            სოციალური ბმულები
          </h2>
        </DashboardNavs>

        <DashboardNavs destination={'about-band'}>
          <NoteIcon />
          <h2 className='text-[20px] 2xl:text-[24px]  pt-1'>ბენდის შესახებ</h2>
        </DashboardNavs>

        <DashboardNavs destination={'/login'} onClick={() => authCtx.logout()}>
          <DoorIcon />
          <h2 className='text-[20px] 2xl:text-[24px]  pt-1'>გადი გარეთ</h2>
        </DashboardNavs>
      </DashboardWrapper>

      <Outlet />
    </>
  );
};

export default Dashoboard;
