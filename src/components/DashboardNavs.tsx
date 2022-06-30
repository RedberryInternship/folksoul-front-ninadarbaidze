import React from 'react';
import { NavLink } from 'react-router-dom';
import { JsxElement } from 'typescript';

type DashboartNavs = {
  destination: string;
  children: React.ReactNode;
};

const DashboardNavs: React.FC<DashboartNavs> = (props) => {
  return (
    <li>
      <NavLink
        to={props.destination}
        className={({ isActive }) =>
          isActive
            ? 'flex gap-2 pl-4 h-14 items-center text-dark50 bg-white'
            : 'flex gap-2 pl-4 h-14 items-center text-white'
        }
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default DashboardNavs;
