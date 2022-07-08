import React from 'react';
import { ButtonText } from 'components';

const FormButton: React.FC<ButtonText> = (props) => {
  return (
    <button className=' text-white bg-blue2 border-0 text-base 2xl:text-2xl rounded-[8px] px-12 2xl:px-20 py-4 2xl:py-6'>
      {props.buttonText}
    </button>
  );
};

export default FormButton;
