import React from 'react';
import { ButtonText } from 'components';

const FormButton: React.FC<ButtonText> = (props) => {
  return (
    <button className=' text-white bg-blue2 border-0 text-2xl rounded-[8px] px-20 py-6 mt-[-50px]'>
      {props.buttonText}
    </button>
  );
};

export default FormButton;
