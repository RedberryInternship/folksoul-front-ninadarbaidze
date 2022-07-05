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
      const response = await axios.get(`http://localhost:3000/bands`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setData(response.data);
    } catch (error: any) {}
  }, [token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <div className='fixed bg-backdrop w-screen h-screen'></div>
      <div className='flex flex-col pt-20 items-center w-[70%] h-[80%] absolute top-[10%] left-[25%] bg-white rounded-[20px] shadow-innerSh'>
        <h1 className=' text-4xl'>დილამშვიდობისა!</h1>
        <div className='flex flex-col items-center pt-20'>
          <TvSatelite />
          <img
            src={
              data.image.length > 0
                ? `http://localhost:3000/${data.image[0].imageUrl}`
                : band
            }
            alt=''
            className='h-[15vw] border-[16px]'
          />
          <TvFeet />
        </div>
      </div>
    </>
  );
};

export default Main;
