import React from 'react';
import { AdminPanelActionWrapper } from 'components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input, Textarea, FormButton } from 'pages/NewMember/components';
import { useNavigate } from 'react-router-dom';

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
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm<AddNewMember>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      name: '',
      instrument: '',
      orbitLength: 3,
      color: '',
    },
  });
  return (
    <div>
      <AdminPanelActionWrapper header='დაამატე ჯგუფის ახალი წევრი'>
        <form className='flex flex-col justify-center items-center gap-8'>
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
              type='number'
              register={register}
              placeholder={'ორბიტის სიგანე'}
              id={'lorbitLength'}
              isRequired={true}
              minValue={3}
              class={
                errors.orbitLength ? 'w-[10vw] border-red border-2' : 'w-[10vw]'
              }
            />
            <Input
              fieldName='color'
              type='text'
              register={register}
              placeholder={'ფერი'}
              id={'color'}
              isRequired={true}
              minValue={3}
              class={errors.color ? 'w-[10vw] border-red border-2' : 'w-[10vw]'}
            />
          </div>
          <Textarea
            fieldName='ბიოგრაფია'
            register={register}
            placeholder={'ბიოგრაფია'}
          />
          <FormButton />
          <button
            className=' text-link font-bold underline mt-[-20px]'
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
