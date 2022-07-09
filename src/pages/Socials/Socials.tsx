import { useState, useContext, useCallback, useEffect } from 'react';
import { AdminPanelActionWrapper, SocialsTypes } from 'components';
import AuthContext from 'store/AuthContext';
import axios from 'axios';
import { Social } from 'pages/Socials/components';
import { Outlet, NavLink } from 'react-router-dom';

const Socials = () => {
  const [data, setData] = useState<SocialsTypes[]>([]);
  const authCtx = useContext(AuthContext);

  const token = localStorage.getItem('token');
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_DOMAIN}/social-media`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setData(response.data);
    } catch (error: any) {}
  }, [token]);

  useEffect(() => {
    fetchData();
  }, [fetchData, authCtx.socialIsEdited]);
  return (
    <>
      <AdminPanelActionWrapper
        className='flex flex-col justify-between gap-8 2xl:gap-12'
        header='სოციალური ბმულები'
      >
        {data.map((data) => (
          <Social {...data} key={data._id} fetchData={fetchData} />
        ))}
        <button className=' text-link text-base 2xl:text-2xl font-bold underline mt-[2rem] 2xl:mt-[5rem]'>
          <NavLink to='new-social'>დაამატე ახალი სოციალური ბმული</NavLink>
        </button>
      </AdminPanelActionWrapper>
      <Outlet />
    </>
  );
};

export default Socials;
