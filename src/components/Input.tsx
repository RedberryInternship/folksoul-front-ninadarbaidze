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
          className={`${props.class} w-[28rem] h-[5rem]  focus:outline-none bg-dark30 placeholder:text-brown text-2xl font-normal  border-0 rounded-[2px]  pl-[8%] `}
          type={props.type ? props.type : 'text'}
          id={props.id}
          placeholder={props.placeholder}
          {...props.register(props.fieldName, {
            required: {
              value: props.isRequired,
              message: 'ეს ველი სავალდებულოა',
            },
            minLength: {
              value: props.minValue ? props.minValue : 0,
              message: `შეიყვანე მინიმუმ ${props.minValue} სიმბოლო `,
            },
            // validate: (value: string) =>
            //   props.pass === value || props.callBackMessage,
            pattern: {
              value: /^[a-z][a-z0-9]/,
              message: 'გთხოვ შეიყვანე ვალიდური მეტსახელი',
            },
          })}
        />
        <p className='max-w-sm pl-[3%] pt-1 text-error xs:text-sm lg:text-xs 2xl:text-base'>
          {props.errorMessage}
        </p>
      </div>
    </div>
  );
};

export default Input;
