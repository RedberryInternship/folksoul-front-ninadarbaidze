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
  color: any;
  biography: string;
};

const NewMember = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
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
          <Input
            fieldName='name'
            type='text'
            register={register}
            placeholder={'სახელი'}
            id={'name'}
            isRequired={true}
            minValue={3}
            class={errors.name ? 'w-[20vw] border-red border-2' : 'w-[20vw]'}
          />
          <div className='flex gap-6'>
            <Input
              fieldName='instrument'
              type='text'
              register={register}
              placeholder={'ინსტრუმენტი'}
              id={'instrument'}
              isRequired={true}
              minValue={3}
              class={
                errors.instrument ? 'w-[10vw] border-red border-2' : 'w-[10vw]'
              }
            />
            <Input
              fieldName='orbitLength'
              type='text'
              register={register}
              placeholder={'ორბიტის სიგანე'}
              isRequired={true}
              class={
                errors.instrument ? 'w-[10vw] border-red border-2' : 'w-[10vw]'
              }
            />

            <Input
              fieldName='color'
              type='text'
              register={register}
              placeholder={'ფერი'}
              id={'color'}
              isRequired={true}
              minValue={7}
              class={errors.color ? 'w-[10vw] border-red border-2' : 'w-[10vw]'}
            />
          </div>
          <Textarea
            fieldName='biography'
            register={register}
            placeholder={'ბიოგრაფია'}
          />
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
