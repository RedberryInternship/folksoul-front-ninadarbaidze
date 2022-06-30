import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  HomeIcon,
  MemberIcon,
  YoutubeIcon,
  NoteIcon,
  DoorIcon,
} from 'components/svgs';
import { DashboardWrapper, DashboardNavs } from 'components';

const Dashoboard = () => {
  return (
    <>
      <DashboardWrapper>
        <DashboardNavs destination={'main'}>
          <HomeIcon />
          <h2>მთავარი</h2>
        </DashboardNavs>

        <DashboardNavs destination={'band-members'}>
          <MemberIcon />
          <h2>ჯგუფის წევრები</h2>
        </DashboardNavs>

        <DashboardNavs destination={'socials'}>
          <YoutubeIcon />
          <h2>სოციალური ბმულები</h2>
        </DashboardNavs>

        <DashboardNavs destination={'about-band'}>
          <NoteIcon />
          <h2>ბენდის შესახებ</h2>
        </DashboardNavs>

        <DashboardNavs destination={'logout'}>
          <DoorIcon />
          <h2>გადი გარეთ</h2>
        </DashboardNavs>
      </DashboardWrapper>

      <Outlet />
    </>
  );
};

export default Dashoboard;
