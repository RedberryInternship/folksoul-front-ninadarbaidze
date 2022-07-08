import React from 'react';
import { OnClick } from 'components';

const Close: React.FC<OnClick> = (props) => {
  return (
    <svg
      viewBox='0 0 41 40'
      fill='none'
      onClick={props.onClick}
      className='fixed right-5 top-5 cursor-pointer h-6 w-6 2xl:h-9 2xl:w-9 '
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='21' cy='20' r='19.5' stroke='#333333' />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M29.546 30.0459L10.4541 10.9541L11.1612 10.247L30.2531 29.3388L29.546 30.0459Z'
        fill='#EB5757'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M10.4541 30.0459L29.546 10.9541L30.2531 11.6612L11.1612 30.753L10.4541 30.0459Z'
        fill='#EB5757'
      />
    </svg>
  );
};

export default Close;
