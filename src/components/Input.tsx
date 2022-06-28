import React from 'react';

type inputProps = {
  labelName?: string;
  type?: string;
  register: any;
  fieldName: string;
  placeholder: string;
  isRequired?: boolean;
  requiredMessage?: string;
  minValue?: number;
  minValueMessage?: string;
  errorMessage?: string;
  id?: string;
  patternValueMessage?: string;
  classes?: string;
  callBack?: () => void;
  callBackMessage?: string;
  class?: string;
  isValidInput?: Boolean;
  pass?: string;
  repeatPass?: string;
  error?: any;
  pattern?: any;
};

const Input: React.FC<inputProps> = (props) => {
  return (
    <div className={`flex flex-col`}>
      <label htmlFor={props.fieldName} className='text-dark100 font-extrabold'>
        {props.labelName}
      </label>
      <div className='relative flex items-center'>
        <input
          className={`${props.class} w-[285px] mt-12 h-14  focus:outline-none bg-dark30 placeholder:text-brown  text-sm font-normal  border-0 rounded-[2px]  pl-[8%] `}
          type={props.type ? props.type : 'text'}
          id={props.id}
          placeholder={props.placeholder}
          {...props.register(props.fieldName, {
            required: {
              value: props.isRequired,
              message: 'error',
            },
            minLength: {
              value: props.minValue ? props.minValue : 0,
              message: 'error',
            },
            validate: (value: string) =>
              props.pass === value || props.callBackMessage,
            pattern: {
              value: props.pattern,
              message: 'error',
            },
          })}
        />
      </div>
    </div>
  );
};

export default Input;
