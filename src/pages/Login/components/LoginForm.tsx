import React, { useContext, useState } from 'react';
import { Input, Button, LoginValueTypes } from 'components';
import { LoginModal } from 'pages/Login/components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AuthContext } from 'store';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const LoginForm = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm<LoginValueTypes>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const username = watch('username');

  const onSubmit: SubmitHandler<LoginValueTypes> = async (data) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_DOMAIN}/auth`,
        data
      );
      const getData = await response;
      authCtx.login(getData.data.token);
    } catch (error: any) {
      setError(error.response.status);
      throw new Error('Request failed!');
    }
    navigate('/dashoboard/main');
  };
  return (
    <LoginModal>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col items-center'
      >
        <div className='h-14 mt-8 2xl:h-20 2xl:mt-12'>
          <Input
            fieldName='username'
            register={register}
            placeholder={'მეტსახელი'}
            id={'login-usr'}
            isRequired={true}
            pattern={/^[a-z][a-z0-9]/}
            patternValueMessage={'გთხოვ შეიყვანე ვალიდური მეტსახელი'}
            minValue={3}
            class={
              errors.username || (error && !isSubmitSuccessful)
                ? 'border-red border-2  w-[20rem] h-[4rem] 2xl:w-[28rem] 2xl:h-[5rem]  focus:outline-none bg-dark30 placeholder:text-brown text-base 2xl:text-2xl font-normal rounded-[2px]  pl-[8%]'
                : ' w-[20rem] h-[4rem] 2xl:w-[28rem] 2xl:h-[5rem]  focus:outline-none bg-dark30 placeholder:text-brown text-base 2xl:text-2xl font-normal  border-0 rounded-[2px]  pl-[8%]'
            }
          />
          {errors.username ? (
            <p className='text-red text-[15px] 2xl:text-[20px] pt-1'>
              {errors.username?.message}
            </p>
          ) : null}
          {error && !isSubmitSuccessful && username.length >= 3 ? (
            <p className='text-red text-[15px] 2xl:text-[20px] pt-1'>
              მეტსახელი ან პაროლი არასწორია
            </p>
          ) : null}
        </div>

        <div className='h-12 mt-12'>
          <Input
            fieldName='password'
            type='password'
            register={register}
            placeholder={'პაროლი'}
            id={'password'}
            isRequired={true}
            minValue={3}
            class={
              errors.password
                ? 'border-red border-2  w-[20rem] h-[4rem] 2xl:w-[28rem] 2xl:h-[5rem]  focus:outline-none bg-dark30 placeholder:text-brown text-base 2xl:text-2xl font-normal rounded-[2px]  pl-[8%]'
                : ' w-[20rem] h-[4rem] 2xl:w-[28rem] 2xl:h-[5rem]  focus:outline-none bg-dark30 placeholder:text-brown text-base 2xl:text-2xl font-normal  border-0 rounded-[2px]  pl-[8%]'
            }
          />
          {errors.password ? (
            <p className='text-red text-[15px] 2xl:text-[20px] pt-1'>
              {errors.password?.message}
            </p>
          ) : null}
        </div>
        <Button>შემობრძანდი</Button>
      </form>
    </LoginModal>
  );
};

export default LoginForm;
