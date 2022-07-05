import React, { useState, useEffect, useCallback, useContext } from 'react';
import { AdminPanelActionWrapper, BandMemberData } from 'components';
import { Member } from 'pages/BandMember/components';
import { Outlet, NavLink } from 'react-router-dom';
import axios from 'axios';
import AuthContext from 'store/AuthContext';

const BandMember = () => {
  const [data, setData] = useState<BandMemberData[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const authCtx = useContext(AuthContext);

  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

  const token = localStorage.getItem('token');
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/band-members?page=${pageNumber}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setData(response.data.bandMembers);
      setNumberOfPages(response.data.total);
    } catch (error: any) {}
  }, [token, pageNumber]);

  useEffect(() => {
    fetchData();
  }, [fetchData, authCtx.memberIsEdited]);

  return (
    <>
      <AdminPanelActionWrapper className='gap-40' header='ჯგუფის წევრები'>
        <div className='flex gap-10'>
          {data.map((data) => (
            <Member {...data} key={data._id} fetchData={fetchData} />
          ))}
        </div>
        <div className='flex justify-center gap-5'>
          {pages.map((pageIndex) => (
            <button
              className={
                pageNumber === pageIndex
                  ? 'bg-dark20  h-6 w-6 rounded-full'
                  : 'bg-dark10 h-6 w-6 rounded-full'
              }
              key={pageIndex}
              onClick={() => setPageNumber(pageIndex)}
            ></button>
          ))}
        </div>

        <button className=' text-link text-2xl font-bold underline  mt-[-20px]'>
          <NavLink to='new-member'>ახალი წევრი გვყავს?</NavLink>
        </button>
      </AdminPanelActionWrapper>
      <Outlet />
    </>
  );
};

export default BandMember;
