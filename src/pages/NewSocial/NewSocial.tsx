import { useContext, useState } from 'react';
import { AdminPanelActionWrapper, AddNewSocial } from 'components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input, FormButton } from 'pages/NewMember/components';
import { useNavigate, useLocation } from 'react-router-dom';
import AuthContext from 'store/AuthContext';

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
      await axios.patch('http://localhost:3000/edit-social/' + state.id, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      authCtx.refreshSocials();
      navigate('/dashoboard/socials');

      return;
    } catch (error: any) {
      setError(error.response.status);
      throw new Error('Request failed!');
    }
  };

  const addNewSocialHandler = async (data: AddNewSocial) => {
    try {
      await axios.post('http://localhost:3000/add-social', data, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error: any) {
      setError(error.response.status);
      throw new Error('Request failed!');
    }
    authCtx.refreshSocials();
    navigate('/dashoboard/socials');
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
                  ? 'border-red w-[20rem] 2xl:w-[25rem] '
                  : 'border-blue2 w-[20rem] 2xl:w-[25rem]'
              }
            />
            {errors.name ? (
              <p className='text-red text-[12px] 2xl:text-[16px] pt-1'>
                {errors.name?.message}
              </p>
            ) : null}
            {error && !isSubmitSuccessful ? (
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
                  ? 'border-red w-[30rem] 2xl:w-[40rem] '
                  : 'border-blue2 w-[30rem] 2xl:w-[40rem]'
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
          <nav className='flex flex-col mt-10'>
            <FormButton
              buttonText={!state ? 'დაამატე სოციალური ბმული' : 'განაახლე ბმული'}
            />
            <button
              className=' text-link text-base 2xl:text-2xl font-bold underline mt-[20px]'
              onClick={() => navigate('/dashoboard/socials')}
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
