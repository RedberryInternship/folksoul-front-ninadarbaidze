import React from 'react';
import { Children } from 'components';

const BandMembersWrapper: React.FC<Children> = ({ children }) => {
  return (
    <div>
      <div className='flex flex-col pt-16 items-center w-[70%] h-[80%] absolute top-[10%] left-[25%] bg-white rounded-[20px] shadow-innerSh'>
        <div className='flex flex-col justify-between w-[70%] items-center ml-[8%] mr-[8%]  pb-12 border-b-[1px] border-dark50 h-6'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default BandMembersWrapper;
