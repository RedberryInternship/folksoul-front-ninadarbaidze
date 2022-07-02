import React, { Component } from 'react';
import { OnClick } from 'components';
const YellowButton: React.FC<OnClick> = (props) => {
  return (
    <svg
      width='28'
      height='28'
      viewBox='0 0 24 24'
      fill='none'
      onClick={props.onClick}
      className='cursor-pointer'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='12' cy='12' r='11.5' fill='black' stroke='#F2C94C' />
      <circle cx='12' cy='12' r='6' fill='#F2C94C' />
    </svg>
  );
};

export default YellowButton;
