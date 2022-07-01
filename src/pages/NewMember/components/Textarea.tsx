import React from 'react';

type TextareaField = {
  labelName?: string;
  register: any;
  fieldName: string;
  errorMessage?: string;
  id?: string;
  placeholder: string;
  class?: string;
};

const Textarea: React.FC<TextareaField> = (props) => {
  return (
    <>
      <div className='flex flex-col mb-12'>
        <label htmlFor={props.fieldName}>{props.labelName}</label>
        <textarea
          id={props.fieldName}
          className={`${props.class} w-[40vw] h-[6vw] text-center  focus:outline-none bg-white placeholder:placeholder text-xl font-normal border-blue2  border-[1px] rounded-[5px]  pl-[1%] `}
          placeholder={props.placeholder}
          {...props.register(props.fieldName)}
        />
        <p className='text-base pl-[3%] mt-2 text-error'>
          {props.errorMessage}
        </p>
      </div>
    </>
  );
};

export default Textarea;
