import React from 'react';
import { ChildrenClassesTypes } from 'components';

const Button: React.FC<ChildrenClassesTypes> = (props) => {
  return (
    <>
      <button
        className={`${props.className} w-[227px] h-[55px] mt-10 bg-grad3 border-[1px] rounded-[3px]  border-white text-white`}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
