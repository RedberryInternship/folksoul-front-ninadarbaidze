import React from 'react';
import { OnClick } from 'types';

const GreenButton: React.FC<OnClick> = (props) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      id='greenButton'
      className='cursor-pointer w-[20px] h-[20px] 2xl:w-[28px] 2xl:h-[28px]'
      onClick={props.onClick}
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='12' cy='12' r='11.5' fill='black' stroke='#88D06F' />
      <circle cx='12' cy='12' r='6' fill='#88D06F' />
    </svg>
  );
};

export default GreenButton;
