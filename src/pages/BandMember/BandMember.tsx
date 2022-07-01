import React from 'react';
import { AdminPanelActionWrapper } from 'components';
import { Member } from 'pages/BandMember/components';

const BandMember = () => {
  return (
    <>
      <AdminPanelActionWrapper header='ჯგუფის წევრები'>
        <Member name={'ნინა'} />
        <Member name={'ნინა'} />
        <Member name={'ნინა'} />
      </AdminPanelActionWrapper>
    </>
  );
};

export default BandMember;
