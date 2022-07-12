import { useContext, useState } from 'react';
import { AdminPanelActionWrapper, AddNewMember, Input } from 'components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Textarea, FormButton } from 'pages/NewMember/components';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from 'store';

import axios from 'axios';

const NewMember = () => {
  const authCtx = useContext(AuthContext);
  const [error, setError] = useState<number | null>(null);
  const location = useLocation();
  const state = location.state as AddNewMember;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
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
  const token = localStorage.getItem('token');

  const updateBandMemberHandler = async (data: AddNewMember) => {
    try {
      await axios.patch(
        `${process.env.REACT_APP_DOMAIN}/edit-member/${state.id}`,
        data,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      authCtx.refreshMembers();
      navigate('/dashboard/band-members');

      return;
    } catch (error: any) {}
  };

  const addNewBandMemberHandler = async (data: AddNewMember) => {
    try {
      await axios.post(`${process.env.REACT_APP_DOMAIN}/new-member`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error: any) {
      setError(error.response.status);
      throw new Error('Request failed!');
    }
    authCtx.refreshMembers();
    navigate('/dashboard/band-members');
  };

  const onSubmit: SubmitHandler<AddNewMember> = async (data) => {
    if (state) updateBandMemberHandler(data);
    else addNewBandMemberHandler(data);
  };

  return (
    <div>
      <AdminPanelActionWrapper header='დაამატე ჯგუფის ახალი წევრი'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col mt-4 2xl:mt-8 justify-center items-center gap-4 2xl:gap-12'
        >
          <div className='flex flex-col items-center h-[5rem]'>
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
                errors.name
                  ? 'border-red w-[20vw] h-[3rem] 2xl:h-[4rem] text-center  focus:outline-none bg-white placeholder:placeholder text-[14px] 2xl:text-xl font-normal  border-[1px] 2xl:border-[1.5px] rounded-[5px]  pl-[8%] '
                  : 'border-blue2 w-[20vw] h-[3rem] 2xl:h-[4rem] text-center  focus:outline-none bg-white placeholder:placeholder text-[14px] 2xl:text-xl font-normal  border-[1px] 2xl:border-[1.5px] rounded-[5px]  pl-[8%]'
              }
            />
            {errors.name ? (
              <p className='text-red text-[12px] 2xl:text-[16px] pt-1'>
                {errors.name?.message}
              </p>
            ) : null}
            {error ? (
              <p className='text-red text-[12px] 2xl:text-[16px] pt-1'>
                უკვე არსებობს სხვა ამ მეტსახელით
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
                    ? 'border-red w-[10vw] h-[3rem] 2xl:h-[4rem] text-center  focus:outline-none bg-white placeholder:placeholder text-[14px] 2xl:text-xl font-normal  border-[1px] 2xl:border-[1.5px] rounded-[5px]  pl-[8%] '
                    : 'border-blue2 w-[10vw] h-[3rem] 2xl:h-[4rem] text-center  focus:outline-none bg-white placeholder:placeholder text-[14px] 2xl:text-xl font-normal  border-[1px] 2xl:border-[1.5px] rounded-[5px]  pl-[8%]'
                }
              />
              {errors.instrument ? (
                <p className='text-red text-[12px] 2xl:text-[16px] pt-1'>
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
                id={'orbitLength'}
                pattern={/^[0-9]*$/}
                patternValueMessage={'შეიყვანე რიცხვი'}
                min={300}
                minMessage={'სიგრძე მინ. 300 '}
                max={700}
                maxMessage={'სიგრძე მაქს. 700 '}
                class={
                  errors.orbitLength
                    ? 'border-red w-[10vw] h-[3rem] 2xl:h-[4rem] text-center  focus:outline-none bg-white placeholder:placeholder text-[14px] 2xl:text-xl font-normal  border-[1px] 2xl:border-[1.5px] rounded-[5px]  pl-[8%] '
                    : 'border-blue2 w-[10vw] h-[3rem] 2xl:h-[4rem] text-center  focus:outline-none bg-white placeholder:placeholder text-[14px] 2xl:text-xl font-normal  border-[1px] 2xl:border-[1.5px] rounded-[5px]  pl-[8%]'
                }
              />
              {errors.orbitLength ? (
                <p className='text-red text-[12px] 2xl:text-[16px] pt-1'>
                  {errors.orbitLength?.message}
                </p>
              ) : null}
            </div>
            <div className='flex flex-col items-center'>
              <Input
                fieldName='color'
                type='color'
                register={register}
                placeholder={'ფერი'}
                id={'color'}
                isRequired={true}
                class={
                  errors.color
                    ? 'border-red w-[10vw] h-[3rem] 2xl:h-[4rem] text-center  focus:outline-none bg-white placeholder:placeholder text-[14px] 2xl:text-xl font-normal  border-[1px] 2xl:border-[1.5px] rounded-[5px]  p-2 '
                    : 'border-blue2 w-[10vw] h-[3rem] 2xl:h-[4rem] text-center  focus:outline-none bg-white placeholder:placeholder text-[14px] 2xl:text-xl font-normal  border-[1px] 2xl:border-[1.5px] rounded-[5px]  p-2'
                }
              />
              {errors.color ? (
                <p className='text-red text-[12px] 2xl:text-[16px] pt-1'>
                  {errors.color?.message}
                </p>
              ) : null}
            </div>
          </div>
          <div className='flex flex-col items-center h-[8rem] 2xl:h-[10rem]'>
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
              <p className='text-red text-[12px] 2xl:text-[16px] pt-1'>
                {errors.biography?.message}
              </p>
            ) : null}
          </div>
          <div className='flex flex-col space-y-4 absolute bottom-5'>
            <FormButton
              buttonText={!state ? 'დაამატე წევრი' : 'განაახლე წევრი'}
            />
            <button
              className=' text-link text-base 2xl:text-2xl font-bold underline '
              onClick={() => navigate('/dashboard/band-members')}
            >
              გადი უკან
            </button>
          </div>
        </form>
      </AdminPanelActionWrapper>
    </div>
  );
};

export default NewMember;
