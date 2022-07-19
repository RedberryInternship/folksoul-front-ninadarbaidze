import { useContext, useState } from 'react';
import { AdminPanelActionWrapper, Textarea } from 'components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from 'store';
import { EditBandTypes } from 'types';
import { editBand } from 'services';

const EditBand = () => {
  const authCtx = useContext(AuthContext);
  const [error, setError] = useState<number | null>(null);
  const location = useLocation();
  const state = location.state as EditBandTypes;
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<EditBandTypes>({
    mode: 'onChange',
    defaultValues: {
      id: state ? state.id : '',
      about: state ? state.about : '',
    },
  });

  const onSubmit: SubmitHandler<EditBandTypes> = async (data) => {
    try {
      await editBand(authCtx.token, state.id, data);

      authCtx.refreshBand();
      navigate('/dashboard/about-band');

      return;
    } catch (error: any) {
      setError(error);
    }
  };

  return (
    <div>
      <AdminPanelActionWrapper
        className='gap-20 '
        header='ბენდის შესახებ - დაარედაქტირე'
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col mt-2 justify-center items-center gap-4 2xl:gap-8'
        >
          <div className='flex flex-col items-center '>
            <Textarea
              fieldName='about'
              register={register}
              id={'about-band'}
              class={
                'scrollbar w-[48vw] h-[17vw] text-justify  focus:outline-none bg-dark25 placeholder:placeholder text-sm 2xl:text-lg font-normal text-blue2 py-[2%] px-[4%] drop-shadow-4xl  rounded-[10px]'
              }
              isRequired={true}
              placeholder={'ბენდის შესახებ'}
            />
          </div>
          {error ? (
            <p className=' text-red text-sm'>
              მოხდა შეცდომა, გთხოვ სცადო თავიდან
            </p>
          ) : (
            ''
          )}

          <div className='flex flex-col gap-5 absolute bottom-4'>
            <button
              type='submit'
              className='w-40 h-12 2xl:w-52 2xl:h-16 rounded-[5px] text-white text-lg 2xl:text-2xl bg-green'
              id='saveBtn'
            >
              შეინახე
            </button>
            <button
              className=' text-link text-base 2xl:text-2xl font-bold underline '
              id='goBackBtn'
              onClick={() => navigate('/dashboard/about-band')}
            >
              გადი უკან
            </button>
          </div>
        </form>
      </AdminPanelActionWrapper>
    </div>
  );
};

export default EditBand;
