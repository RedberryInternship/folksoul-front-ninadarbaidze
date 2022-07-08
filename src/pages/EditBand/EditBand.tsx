import { useContext } from 'react';
import { AdminPanelActionWrapper, EditBandTypes } from 'components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Textarea } from 'pages/EditBand/components';
import { useNavigate, useLocation } from 'react-router-dom';
import AuthContext from 'store/AuthContext';
import axios from 'axios';

const EditBand = () => {
  const authCtx = useContext(AuthContext);
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
  const token = localStorage.getItem('token');

  const onSubmit: SubmitHandler<EditBandTypes> = async (data) => {
    try {
      await axios.patch(
        `${process.env.REACT_APP_DOMAIN}/edit-band/${state.id}`,
        data,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      authCtx.refreshSocials();
      navigate('/dashoboard/about-band');

      return;
    } catch (error: any) {
      throw new Error('Request failed!');
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
          className='flex flex-col mt-4 justify-center items-center gap-8'
        >
          <div className='flex flex-col items-center'>
            <Textarea
              fieldName='about'
              register={register}
              id={'about-band'}
              isRequired={true}
              placeholder={'ბენდის შესახებ'}
            />
          </div>

          <button
            type='submit'
            className='w-[250px] h-[60px] rounded-[5px] text-white text-2xl bg-green'
          >
            შეინახე
          </button>
          <button
            className=' text-link text-2xl font-bold underline '
            onClick={() => navigate('/dashoboard/about-band')}
          >
            გადი უკან
          </button>
        </form>
      </AdminPanelActionWrapper>
    </div>
  );
};

export default EditBand;
