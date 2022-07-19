import { ChangeEvent, FormEvent, useRef } from 'react';

type ImageUploadFormTypes = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  showSubmitButton: boolean;
  setShowSubmitButton: (value: boolean) => void;
};

const ImageUploadModalForm: React.FC<ImageUploadFormTypes> = (props) => {
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <form onSubmit={props.onSubmit} encType='multipart/form-data'>
        <input
          type='file'
          accept='.png, .jpg, .jpeg'
          name='image'
          ref={fileRef}
          onChange={props.onChange}
          hidden
        />
        {!props.showSubmitButton && (
          <button
            onClick={() => {
              fileRef.current!.click();
              props.setShowSubmitButton(true);
            }}
            className='w-40 h-12 2xl:w-52 2xl:h-16 rounded-[5px] text-white text-base 2xl:text-2xl bg-backdrop'
            id='uploadBtn'
          >
            ატვირთე
          </button>
        )}

        {props.showSubmitButton && (
          <button
            type='submit'
            className='w-40 h-12 2xl:w-52 2xl:h-16  rounded-[5px] text-white text-base 2xl:text-2xl bg-green'
            id='saveBtn'
          >
            შეინახე
          </button>
        )}
      </form>
    </div>
  );
};

export default ImageUploadModalForm;
