import React from 'react';
import { InputProps } from 'components';

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className={`flex flex-col`}>
      <label htmlFor={props.fieldName} className='text-dark100 font-extrabold'>
        {props.labelName}
      </label>
      <div className='relative flex items-center'>
        <input
          className={`${props.class} w-[20rem] h-[4rem] 2xl:w-[28rem] 2xl:h-[5rem]  focus:outline-none bg-dark30 placeholder:text-brown text-base 2xl:text-2xl font-normal  border-0 rounded-[2px]  pl-[8%] `}
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
