import { useEffect, useState, useCallback } from 'react';
import { TvFeet, TvSatelite } from 'components/svgs';
import { AboutBandTypes } from 'components';
import { band } from 'assets/images';
import axios from 'axios';

const Main = () => {
  const [data, setData] = useState<AboutBandTypes>({
    _id: '',
    about: '',
    image: [],
  });

  const token = localStorage.getItem('token');
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_DOMAIN}/bands`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setData(response.data);
    } catch (error: any) {}
  }, [token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <div className='bg-backdrop w-screen h-screen'>
        <div className='flex flex-col pt-20 items-center w-[70%] h-[80%] absolute top-[10%] left-[25%] bg-white rounded-[20px] shadow-innerSh'>
          <h1 className='text-2xl 2xl:text-3xl '>დილამშვიდობისა!</h1>
          <div className='flex flex-col items-center pt-20'>
            <TvSatelite />
            <div className='flex flex-col justify-center h-[15vw] w-[25vw] bg-[#000000] border-[16px] overflow-clip'>
              <img
                src={
                  data.image.length > 0
                    ? `${process.env.REACT_APP_DOMAIN}/${data.image[0].imageUrl}`
                    : band
                }
                alt='band-member-logo'
                className='h-[15vw] object-cover'
              />
            </div>
            <TvFeet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
