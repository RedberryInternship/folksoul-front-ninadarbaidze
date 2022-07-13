import React from 'react';
import { OnClick } from 'types';

const RedButton: React.FC<OnClick> = (props) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      id='redButton'
      onClick={props.onClick}
      className='cursor-pointer w-[20px] h-[20px] 2xl:w-[28px] 2xl:h-[28px]'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='12' cy='12' r='11.5' fill='black' stroke='#EB5757' />
      <circle cx='12' cy='12' r='6' fill='#EB5757' />
    </svg>
  );
};

export default RedButton;
