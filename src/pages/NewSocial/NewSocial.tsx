import { useContext, useState } from 'react';
import { AdminPanelActionWrapper, AddNewSocial, Input } from 'components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormButton } from 'pages/NewMember/components';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from 'store';
import axios from 'axios';

const NewMember = () => {
  const authCtx = useContext(AuthContext);
  const [error, setError] = useState<number | null>(null);
  const location = useLocation();
  const state = location.state as AddNewSocial;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<AddNewSocial>({
    mode: 'onChange',
    defaultValues: {
      name: state ? state.name : '',
      url: state ? state.url : '',
    },
  });

  const token = localStorage.getItem('token');

  const updateSocialHandler = async (data: AddNewSocial) => {
    try {
      await axios.patch(
        `${process.env.REACT_APP_DOMAIN}/edit-social/${state.id}`,
        data,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      authCtx.refreshSocials();
      navigate('/dashboard/socials');

      return;
    } catch (error: any) {}
  };

  const addNewSocialHandler = async (data: AddNewSocial) => {
    try {
      await axios.post(`${process.env.REACT_APP_DOMAIN}/add-social`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error: any) {
      setError(error.response.status);
      throw new Error('Request failed!');
    }
    authCtx.refreshSocials();
    navigate('/dashboard/socials');
  };

  const onSubmit: SubmitHandler<AddNewSocial> = async (data) => {
    if (state) updateSocialHandler(data);
    else addNewSocialHandler(data);
  };

  return (
    <div>
      <AdminPanelActionWrapper
        className='gap-20 mt-16'
        header='დაამატე ჯგუფის ახალი წევრი'
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col  2xl:mt-14 justify-center items-center gap-4 2xl:gap-14'
        >
          <div className='flex flex-col items-center h-[5rem]'>
            <Input
              fieldName='name'
              type='text'
              register={register}
              placeholder={'სოციალური ქსელი'}
              id={'social-name'}
              isRequired={true}
              minValue={2}
              class={
                errors.name
                  ? 'border-red w-[20rem] 2xl:w-[25rem] text-center  focus:outline-none bg-white placeholder:placeholder text-[14px] 2xl:text-xl font-normal  border-[1px] 2xl:border-[1.5px] rounded-[5px]  pl-[8%] '
                  : 'border-blue2 w-[20rem] 2xl:w-[25rem] text-center  focus:outline-none bg-white placeholder:placeholder text-[14px] 2xl:text-xl font-normal  border-[1px] 2xl:border-[1.5px] rounded-[5px]  pl-[8%]'
              }
            />

            {errors.name ? (
              <p className='text-red text-[12px] 2xl:text-[16px] pt-1'>
                {errors.name?.message}
              </p>
            ) : null}
            {error ? (
              <p className='text-red text-[12px] 2xl:text-[16px] pt-1'>
                უკვე არსებობს მსგავსი სოციალური ქსელი
              </p>
            ) : null}
          </div>

          <div className='flex flex-col items-center h-[5rem]'>
            <Input
              fieldName='url'
              type='text'
              register={register}
              placeholder={'ბმული'}
              id={'url'}
              isRequired={true}
              minValue={2}
              class={
                errors.url
                  ? 'border-red w-[30rem] 2xl:w-[40rem] text-center  focus:outline-none bg-white placeholder:placeholder text-[14px] 2xl:text-xl font-normal  border-[1px] 2xl:border-[1.5px] rounded-[5px]  pl-[8%] '
                  : 'border-blue2 w-[30rem] 2xl:w-[40rem] text-center  focus:outline-none bg-white placeholder:placeholder text-[14px] 2xl:text-xl font-normal  border-[1px] 2xl:border-[1.5px] rounded-[5px]  pl-[8%]'
              }
            />
            {errors.url ? (
              <p className='text-red text-[12px] 2xl:text-[16px] pt-1'>
                {errors.url?.message}
              </p>
            ) : null}
            {error && !isSubmitSuccessful ? (
              <p className='text-red text-[12px] 2xl:text-[16px] pt-1'>
                უკვე არსებობს მსგავსი სოციალური ქსელი
              </p>
            ) : null}
          </div>
          <nav className='absolute bottom-10 flex flex-col mt-10'>
            <FormButton
              buttonText={!state ? 'დაამატე სოციალური ბმული' : 'განაახლე ბმული'}
            />
            <button
              className=' text-link text-base 2xl:text-2xl font-bold underline mt-[20px]'
              onClick={() => navigate('/dashboard/socials')}
            >
              გადი უკან
            </button>
          </nav>
        </form>
      </AdminPanelActionWrapper>
    </div>
  );
};

export default NewMember;
