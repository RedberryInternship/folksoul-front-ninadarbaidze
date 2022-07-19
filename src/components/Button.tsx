import React from 'react';
import { ChildrenClassesTypes } from 'types';

const Button: React.FC<ChildrenClassesTypes> = (props) => {
  return (
    <>
      <button
        className={`${props.className} w-[15rem] h-[4rem] mt-16 2xl:mt-24 text-xl  bg-grad3 border-[1px] rounded-[3px]  border-white text-white  `}
        id={'loginBtn'}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
