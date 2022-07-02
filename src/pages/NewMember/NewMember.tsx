import React from 'react';
import { AdminPanelActionWrapper } from 'components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input, Textarea, FormButton } from 'pages/NewMember/components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

type AddNewMember = {
  name: string;
  instrument: string;
  orbitLength: number;
  color: string;
  biography: string;
};

const NewMember = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<AddNewMember>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<AddNewMember> = async (data) => {
    const token = localStorage.getItem('token');
    console.log(data);

    try {
      await axios.post('http://localhost:3000/new-member', data, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error: any) {
      throw new Error('Request failed!');
    }
    navigate('/dashoboard');
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
