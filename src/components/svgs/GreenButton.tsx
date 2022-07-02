import React from 'react';
import { OnClick } from 'components';

const GreenButton: React.FC<OnClick> = (props) => {
  return (
    <svg
      width='28'
      height='28'
      viewBox='0 0 24 24'
      fill='none'
      className='cursor-pointer'
      onClick={props.onClick}
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='12' cy='12' r='11.5' fill='black' stroke='#88D06F' />
      <circle cx='12' cy='12' r='6' fill='#88D06F' />
    </svg>
  );
};

export default GreenButton;
