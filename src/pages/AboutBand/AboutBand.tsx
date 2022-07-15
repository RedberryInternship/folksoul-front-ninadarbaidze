import { useState, useContext, useCallback, useEffect } from 'react';
import { AdminPanelActionWrapper, EditPhoto, EditIcon } from 'components';
import { AboutBandTypes } from 'types';
import { ImageUploadModal } from 'pages/AboutBand/components';
import { band } from 'assets/images';
import { AuthContext } from 'store';
import { Outlet, useNavigate } from 'react-router-dom';
import { getAboutBandInfo } from 'services';

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

  const fetchData = useCallback(async () => {
    try {
      const response = await getAboutBandInfo();
      setData(response.data);
    } catch (error: any) {}
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData, authCtx.refreshBand]);

  const editBandInfoHandler = () => {
    navigate('/dashboard/about-band/edit-band', {
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
        <div className='flex flex-col  justify-center items-center overflow-auto absolute w-[100%] bottom-10 left-0'>
          <div className=' flex flex-col justify-center items-center relative rounded-full bg-backdrop mt-4 w-[10rem] h-[10rem]  2xl:w-[16rem] 2xl:h-[16rem] drop-shadow-5xl'>
            <img
              src={
                data.image.length > 0
                  ? `${process.env.REACT_APP_DOMAIN}/${data.image[0].imageUrl}`
                  : band
              }
              alt='band-icon'
              className='w-[10rem] h-[10rem] 2xl:w-[16rem] 2xl:h-[16rem] object-cover border-[5px] 2xl:border-[8px] border-blue3  rounded-full'
            />

            <EditPhoto
              onClick={openImagePickerHandler}
              className='w-10 2xl:w-16 absolute ml-28 mt-32 2xl:ml-44 2xl:mt-48 cursor-pointer'
            />
          </div>
          <div className='flex justify-center gap-12 items-center w-[100%]'>
            <div className='bg-dark10 relative w-8 h-8 2xl:w-12 2xl:h-12 border-[1px]  rounded-full cursor-pointer'>
              <EditIcon onClick={editBandInfoHandler} />
            </div>
            <p className='w-[70%] text-sm 2xl:text-xl mt-10 mr-[5%] h-48 2xl:h-60'>
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
