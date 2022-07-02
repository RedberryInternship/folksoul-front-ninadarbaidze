import React, { useState, useEffect, useCallback } from 'react';
import { AdminPanelActionWrapper, Modal } from 'components';
import { Member } from 'pages/BandMember/components';
import { Outlet, NavLink } from 'react-router-dom';
import axios from 'axios';

export type Data = {
  _id: string;
  name: string;
  instrument: string;
  orbitLength: number;
  color: string;
  biography: string;
};

const BandMember = () => {
  const [data, setData] = useState<Data[]>([]);

  const token = localStorage.getItem('token');
  const fetchData = useCallback(async () => {
    try {
      const { data: response } = await axios.get(
        'http://localhost:3000/band-members',
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setData(response);
    } catch (error: any) {}
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <AdminPanelActionWrapper header='ჯგუფის წევრები'>
        <div className='flex gap-10'>
          {data.map((data) => (
            <Member {...data} key={data._id} />
          ))}
        </div>
        <button className=' text-link text-2xl font-bold underline mt-[-20px]'>
          <NavLink to='new-member'>ახალი წევრი გვყავს?</NavLink>
        </button>
      </AdminPanelActionWrapper>
      <Outlet />
    </>
  );
};

export default BandMember;
