import React from 'react';
import { Children } from 'components';

const AdminPanelActionWrapper: React.FC<Children> = ({ children }) => {
  return (
    <>
      <div className='flex flex-col pt-16 items-center w-[70%] h-[80%] absolute top-[10%] left-[25%] bg-white rounded-[20px] shadow-innerSh'>
        <h1 className='text-lg '>ბენდის წევრები</h1>
        <div className='flex flex-col justify-between w-[70%] mb-16 items-center ml-[8%] mr-[8%] border-b-[1px] border-dark50 h-6'></div>
        {children}
      </div>
    </>
  );
};

export default AdminPanelActionWrapper;
