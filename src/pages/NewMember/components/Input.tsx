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
          className={`${props.class} h-[4rem] text-center  focus:outline-none bg-white placeholder:placeholder text-xl font-normal  border-[2px] rounded-[5px]  pl-[8%] `}
          type={props.type ? props.type : 'text'}
          id={props.id}
          placeholder={props.placeholder}
          {...props.register(props.fieldName, {
            required: {
              value: props.isRequired,
              message: '*სავალდებულო',
            },
            minLength: {
              value: props.minValue ? props.minValue : 0,
              message: `მინ. ${props.minValue} სიმბოლო `,
            },
            pattern: {
              value: props.pattern,
              message: props.patternValueMessage,
            },
            min: {
              value: 300,
              message: 'ორბიტის მინიმალური სიგრძე: 300',
            },
            max: {
              value: 900,
              message: 'ორბიტის მაქსიმალური სიგრძე: 900',
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
