import { useState, useContext, useCallback, useEffect } from 'react';
import { AdminPanelActionWrapper, AboutBandTypes } from 'components';
import { EditPhoto, EditIcon } from 'components/svgs';
import { ImageUploadModal } from 'pages/AboutBand/components';
import { band } from 'assets/images';
import axios from 'axios';
import AuthContext from 'store/AuthContext';
import { Outlet, useNavigate } from 'react-router-dom';

const AboutBand = () => {
  const [data, setData] = useState<AboutBandTypes>({
    _id: '',
    about: '',
    image: [],
  });
  const [imageModalState, setImageModalState] = useState(false);

  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const openImagePickerHandler = () => {
    setImageModalState(true);
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
        id: data._id,
        about: data.about,
      },
    });
  };
  return (
    <>
      {imageModalState && (
        <ImageUploadModal {...data} setImageModalState={setImageModalState} />
      )}
      <AdminPanelActionWrapper className=' gap-12' header='ბენდის შესახებ'>
        <div className='flex flex-col justify-center items-center overflow-auto'>
          <div className='flex flex-col justify-center items-center relative rounded-full bg-backdrop mt-4  w-[16rem] h-[16rem] drop-shadow-5xl'>
            <img
              src={
                data.image.length > 0
                  ? `http://localhost:3000/${data.image[0].imageUrl}`
                  : band
              }
              alt=''
              className='w-[16rem] h-[16rem] object-cover border-[8px] border-blue3  rounded-full'
            />

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
              {data!.about}
            </p>
          </div>
        </div>
      </AdminPanelActionWrapper>
      <Outlet />
    </>
  );
};

export default AboutBand;
