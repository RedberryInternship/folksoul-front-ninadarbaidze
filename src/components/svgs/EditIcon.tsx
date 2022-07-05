import React from 'react';
import { OnClick } from 'components';

const EditIcon: React.FC<OnClick> = (props) => {
  return (
    <svg
      width='30'
      height='25'
      viewBox='0 0 46 41'
      fill='none'
      onClick={props.onClick}
      className='absolute left-3 top-3'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M29.5 3.5H6.5C3.73858 3.5 1.5 5.73858 1.5 8.5V34C1.5 36.7614 3.73858 39 6.5 39H30.5C33.2614 39 35.5 36.7614 35.5 34V20.5'
        stroke='black'
        stroke-width='3'
      />
      <path
        d='M25.6264 21.67L22.7411 18.3856C22.7411 18.3856 20.2824 22.8732 20.5709 23.2016C20.8595 23.5301 25.6264 21.67 25.6264 21.67Z'
        fill='#3B5495'
      />
      <path
        d='M38.7639 10.1288L35.8786 6.84445L25.0402 16.3659L27.9255 19.6503L38.7639 10.1288Z'
        fill='black'
      />
      <path
        d='M45.0041 4.64674C45.044 4.02977 42.7358 1.40227 42.1188 1.36237C41.5019 1.32247 38.1776 4.82472 38.1776 4.82472L41.0629 8.10909C41.0629 8.10909 44.9642 5.2637 45.0041 4.64674Z'
        fill='#C4C4C4'
        stroke='black'
        stroke-width='0.874345'
      />
    </svg>
  );
};

export default EditIcon;
