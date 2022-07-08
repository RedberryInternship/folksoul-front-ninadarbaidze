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
          className={`${props.class}  `}
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
              value: props.min,
              message: props.minMessage,
            },
            max: {
              value: props.max,
              message: props.maxMessage,
            },
          })}
        />
      </div>
    </div>
  );
};

export default Input;
