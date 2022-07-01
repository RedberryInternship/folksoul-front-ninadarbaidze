import React from 'react';
import {
  RedButton,
  YellowButton,
  GreenButton,
  EditPhoto,
} from 'components/svgs';
import { AdminPanelActionWrapper } from 'components';
import { Member } from 'pages/BandMember/components';

const BandMember = () => {
  return (
    <>
      <AdminPanelActionWrapper>
        <Member name={'ნინა'} />
      </AdminPanelActionWrapper>
    </>
  );
};

export default BandMember;
