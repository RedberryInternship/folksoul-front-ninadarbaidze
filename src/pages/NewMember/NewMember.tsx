import React, { useContext, useEffect } from 'react';
import { AdminPanelActionWrapper } from 'components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input, Textarea, FormButton } from 'pages/NewMember/components';
import { useNavigate, useLocation } from 'react-router-dom';
import AuthContext from 'store/AuthContext';

import axios from 'axios';

type AddNewMember = {
  id: string;
  name: string;
  instrument: string;
  orbitLength: number | string;
  color: string;
  biography: string;
};

const NewMember = () => {
  const location = useLocation();
  const state = location.state as AddNewMember;
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<AddNewMember>({
    mode: 'onChange',
    defaultValues: {
      name: state ? state.name : '',
      instrument: state ? state.instrument : '',
      orbitLength: state ? state.orbitLength : '',
      color: state ? state.color : '',
      biography: state ? state.biography : '',
    },
  });
  const onSubmit: SubmitHandler<AddNewMember> = async (data) => {
    const token = localStorage.getItem('token');

    if (state) {
      try {
        await axios.patch(
          'http://localhost:3000/edit-member/' + state.id,
          data,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        authCtx.refreshMembers();
        navigate('/dashoboard/band-members');

        return;
      } catch (error: any) {
        throw new Error('Request failed!');
      }
    }

    try {
      await axios.post('http://localhost:3000/new-member', data, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error: any) {
      throw new Error('Request failed!');
    }
    authCtx.refreshMembers();
    navigate('/dashoboard/band-members');
  };

  return (
    <div>
      <AdminPanelActionWrapper header='დაამატე ჯგუფის ახალი წევრი'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col mt-14 justify-center items-center gap-14'
        >
          <div className='flex flex-col items-center h-[4rem]'>
            <Input
              fieldName='name'
              type='text'
              register={register}
              placeholder={'სახელი'}
              id={'name'}
              pattern={/[\u10A0-\u10FF]/}
              patternValueMessage={'წერე ქართულად!'}
              isRequired={true}
              minValue={3}
              class={
                errors.name ? 'border-red w-[20vw] ' : 'border-blue2 w-[20vw]'
              }
            />
            {errors.name ? (
              <p className='text-red text-[16px] pt-1'>
                {errors.name?.message}
              </p>
            ) : null}
          </div>
          <div className='flex gap-6 h-[4rem]'>
            <div className='flex flex-col items-center'>
              <Input
                fieldName='instrument'
                type='text'
                register={register}
                placeholder={'ინსტრუმენტი'}
                id={'instrument'}
                pattern={/[\u10A0-\u10FF]/}
                patternValueMessage={'წერე ქართულად!'}
                isRequired={true}
                minValue={2}
                class={
                  errors.instrument
                    ? 'border-red w-[10vw] '
                    : 'border-blue2 w-[10vw]'
                }
              />
              {errors.instrument ? (
                <p className='text-red text-[16px] pt-1'>
                  {errors.instrument?.message}
                </p>
              ) : null}
            </div>
            <div className='flex flex-col items-center'>
              <Input
                fieldName='orbitLength'
                type='text'
                register={register}
                placeholder={'ორბიტის სიგანე'}
                isRequired={true}
                pattern={/^[0-9]*$/}
                patternValueMessage={'შეიყვანე რიცხვი'}
                class={
                  errors.orbitLength
                    ? 'border-red w-[10vw] '
                    : 'border-blue2 w-[10vw]'
                }
              />
              {errors.orbitLength ? (
                <p className='text-red text-[16px] pt-1'>
                  {errors.orbitLength?.message}
                </p>
              ) : null}
            </div>
            <div className='flex flex-col items-center'>
              <Input
                fieldName='color'
                type='text'
                register={register}
                placeholder={'ფერი'}
                id={'color'}
                isRequired={true}
                pattern={/^#(?:[0-9A-F]{3}){1,2}$/}
                patternValueMessage={'ფერის არასწორი ფორმატი'}
                minValue={7}
                class={
                  errors.color
                    ? 'border-red w-[10vw] '
                    : 'border-blue2 w-[10vw]'
                }
              />
              {errors.color ? (
                <p className='text-red text-[16px] pt-1'>
                  {errors.color?.message}
                </p>
              ) : null}
            </div>
          </div>
          <div className='flex flex-col items-center h-[14rem]'>
            <Textarea
              fieldName='biography'
              register={register}
              placeholder={'ბიოგრაფია'}
              isRequired={true}
              pattern={/[\u10A0-\u10FF]/}
              patternValueMessage={'წერე ქართულად!'}
              class={
                errors.biography ? 'border-red  ' : 'border-blue2 w-[10vw]'
              }
            />
            {errors.biography ? (
              <p className='text-red text-[16px] pt-1'>
                {errors.biography?.message}
              </p>
            ) : null}
          </div>
          <FormButton />
          <button
            className=' text-link text-2xl font-bold underline mt-[-20px]'
            onClick={() => navigate('/dashoboard/band-members')}
          >
            გადი უკან
          </button>
        </form>
      </AdminPanelActionWrapper>
    </div>
  );
};

export default NewMember;
