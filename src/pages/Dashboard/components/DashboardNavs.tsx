import React from 'react';
import { NavLink } from 'react-router-dom';
import { DashboartNavs } from 'components';

const DashboardNavs: React.FC<DashboartNavs> = (props) => {
  return (
    <li>
      <NavLink
        onClick={props.onClick}
        to={props.destination}
        className={({ isActive }) =>
          isActive
            ? 'flex gap-4 pl-4 h-20 items-center text-dark50 bg-white'
            : 'flex gap-4 pl-4 h-20 items-center text-white'
        }
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default DashboardNavs;
