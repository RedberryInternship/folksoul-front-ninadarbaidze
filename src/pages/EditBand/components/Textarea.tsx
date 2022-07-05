import React from 'react';
import { TextareaField } from 'components';

const Textarea: React.FC<TextareaField> = (props) => {
  return (
    <>
      <div className='flex flex-col'>
        <label htmlFor={props.fieldName}>{props.labelName}</label>
        <textarea
          id={props.fieldName}
          className={`${props.class} w-[48vw] h-[22vw] text-justify  focus:outline-none bg-dark25 placeholder:placeholder text-xl font-normal text-blue2 py-[2%] px-[4%] drop-shadow-4xl  rounded-[10px]   `}
          placeholder={props.placeholder}
          {...props.register(props.fieldName, {
            required: {
              value: props.isRequired,
              message: '*სავალდებულო',
            },
            pattern: {
              value: props.pattern,
              message: props.patternValueMessage,
            },
          })}
        />
        <p className='text-base pl-[3%] mt-2 text-error'>
          {props.errorMessage}
        </p>
      </div>
    </>
  );
};

export default Textarea;
