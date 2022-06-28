import React from 'react';
import Input from 'components/Input';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

export type LoginValueTypes = {
  username: string;
  password: string;
};

const LoginModal = () => {
  const { register, handleSubmit } = useForm<any>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const onSubmit: SubmitHandler<LoginValueTypes> = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/auth', data);
      const getData = await response;
      console.log(getData.data.token);
    } catch (error: any) {
      //   setError(error.response.status);
      throw new Error('Request failed!');
    }
    // navigate('/covid-statistics/worldwide');
  };
  return (
    <>
      <div className='flex flex-col items-center w-[384px] h-[438px] border-[1px] rounded-[1px]  border-white bg-gradient-to-t  from-grad4 to-grad3'>
        <div className='flex justify-center items-center w-[140px] h-[45px]  before:block before:absolute before:-inset-1 before:-skew-x-[20deg] before:bg-red relative mt-10 drop-shadow-3xl'>
          <div>
            <h1 className='relative font-bold text-lg '>კარიბჭე</h1>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col items-center'
        >
          <Input
            fieldName='username'
            register={register}
            placeholder={'მეტსახელი'}
            id={'login-usr'}
            isRequired={true}
            minValue={3}
          />
          <Input
            fieldName='password'
            type='password'
            register={register}
            placeholder={'პაროლი'}
            id={'login-usr'}
            isRequired={true}
            minValue={3}
          />
          <button className='w-[227px] h-[55px] mt-10 bg-grad3 border-[1px] rounded-[3px]  border-white text-white'>
            შემობრძანდი
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginModal;
