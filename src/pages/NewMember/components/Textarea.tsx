import React from 'react';
import { TextareaField } from 'components';

const Textarea: React.FC<TextareaField> = (props) => {
  return (
    <>
      <div className='flex flex-col'>
        <label htmlFor={props.fieldName}>{props.labelName}</label>
        <textarea
          id={props.fieldName}
          placeholder='ბიოგრაფია'
          className={`${props.class} w-[40vw] h-[6vw] text-center  focus:outline-none bg-white placeholder:placeholder text-[14px] 2xl:text-xl font-normal  border-[1px] 2xl:border-[1.5px] rounded-[5px]  pl-[1%] `}
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
