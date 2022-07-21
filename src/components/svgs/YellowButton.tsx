import React from 'react';
import { OnClick } from 'types';

const YellowButton: React.FC<OnClick> = (props) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      id='yellowButton'
      data-cy='yellowBtn'
      onClick={props.onClick}
      className='cursor-pointer w-[20px] h-[20px] 2xl:w-[28px] 2xl:h-[28px]'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='12' cy='12' r='11.5' fill='black' stroke='#F2C94C' />
      <circle cx='12' cy='12' r='6' fill='#F2C94C' />
    </svg>
  );
};

export default YellowButton;
