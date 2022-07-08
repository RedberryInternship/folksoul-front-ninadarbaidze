import React from 'react';
import { ChildrenClassesTypes } from 'components';

const Button: React.FC<ChildrenClassesTypes> = (props) => {
  return (
    <>
      <button
        className={`${props.className} w-[15rem] h-[4rem] 2xl:w-[23rem] 2xl:h-[5rem] mt-16 2xl:mt-24 text-xl 2xl:text-2xl bg-grad3 border-[1px] rounded-[3px]  border-white text-white  `}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
