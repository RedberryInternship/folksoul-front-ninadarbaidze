import React, { useContext, useState } from 'react';
import { Input, LoginModal, Button } from 'components';
import { useForm, SubmitHandler } from 'react-hook-form';
import AuthContext from 'store/AuthContext';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

export type LoginValueTypes = {
  username: string;
  password: string;
};

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
      const response = await axios.post('http://localhost:3000/auth', data);
      const getData = await response;
      authCtx.login(getData.data.token);
    } catch (error: any) {
      setError(error.response.status);
      throw new Error('Request failed!');
    }
    navigate('/dashoboard');
  };
  return (
    <LoginModal>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col items-center'
      >
        <div className='h-12 mt-12'>
          <Input
            fieldName='username'
            register={register}
            placeholder={'მეტსახელი'}
            id={'login-usr'}
            pattern={/^[a-z0-9]*/}
            patternValueMessage={
              'გთხოვთ შეიყვანოთ დაბალი რეგისტრის სიმბოლოები და/ან რიცხვები'
            }
            isRequired={true}
            minValue={3}
            class={
              errors.username || (error && !isSubmitSuccessful)
                ? 'border-red border-2'
                : ''
            }
          />
          {errors.username ? (
            <p className='text-red text-[10px] pt-1'>
              {errors.username?.message}
            </p>
          ) : null}
          {error && !isSubmitSuccessful && username.length >= 3 ? (
            <p className='text-red text-[10px] pt-1'>
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
            id={'login-usr'}
            isRequired={true}
            minValue={3}
            class={errors.password ? 'border-red border-2' : ''}
          />
          {errors.password ? (
            <p className='text-red text-xs pt-1'>{errors.password?.message}</p>
          ) : null}
        </div>
        <Button className='w-[227px] h-[55px] mt-12 bg-grad3 border-[1px] rounded-[3px]  border-white text-white'>
          შემობრძანდი
        </Button>
      </form>
    </LoginModal>
  );
};

export default LoginForm;
