import React from 'react';
import { AdminPanelActionWrapper } from 'components';
import { Member } from 'pages/BandMember/components';
import { Outlet, NavLink } from 'react-router-dom';

const BandMember = () => {
  return (
    <>
      <AdminPanelActionWrapper header='ჯგუფის წევრები'>
        <div className='flex gap-10'>
          <Member name={'ნინა'} />
          <Member name={'ნინა'} />
          <Member name={'ნინა'} />
        </div>
        <button className=' text-link font-bold underline mt-[-20px]'>
          <NavLink to='new-member'>ახალი წევრი გვყავს?</NavLink>
        </button>
      </AdminPanelActionWrapper>
      <Outlet />
    </>
  );
};

export default BandMember;
