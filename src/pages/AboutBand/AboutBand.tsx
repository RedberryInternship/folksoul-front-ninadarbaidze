import { useState, useContext, useCallback, useEffect } from 'react';
import { AdminPanelActionWrapper, AboutBandTypes } from 'components';
import { EditPhoto, EditIcon } from 'components/svgs';
import { memberIcon } from 'assets/images';
import axios from 'axios';
import AuthContext from 'store/AuthContext';
import { Outlet, useNavigate } from 'react-router-dom';

const Socials = () => {
  const [data, setData] = useState<AboutBandTypes[]>([]);
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const openImagePickerHandler = () => {
    // setImageModalState(true);
  };

  const token = localStorage.getItem('token');
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:3000/bands`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setData(response.data);
    } catch (error: any) {}
  }, [token]);

  useEffect(() => {
    fetchData();
  }, [fetchData, authCtx.refreshBand]);

  const editBandInfoHandler = () => {
    navigate('/dashoboard/about-band/edit-band', {
      state: {
        id: data[0]._id,
        about: data[0].about,
      },
    });
  };

  return (
    <>
      <AdminPanelActionWrapper className=' gap-12' header='ბენდის შესახებ'>
        <div className='flex flex-col justify-center items-center overflow-auto'>
          <div className='flex flex-col justify-center items-center relative rounded-full bg-backdrop border-[1px] mt-4  w-[16rem] h-[16rem] drop-shadow-5xl'>
            <img src={memberIcon} alt='' className='w-[7rem]  rounded-full' />
            <EditPhoto
              onClick={openImagePickerHandler}
              className='w-[60px] absolute ml-44 mt-48 cursor-pointer'
            />
          </div>
          <div className='flex justify-center gap-12 items-center'>
            <div className='bg-dark10 relative w-12 border-[1px] h-12 rounded-full cursor-pointer'>
              <EditIcon onClick={editBandInfoHandler} />
            </div>
            <p className='w-[70%] text-xl mt-12  mr-[5%] h-[300px]'>
              {data.map((band) => band.about)}
            </p>
          </div>
        </div>
      </AdminPanelActionWrapper>
      <Outlet />
    </>
  );
};

export default Socials;
