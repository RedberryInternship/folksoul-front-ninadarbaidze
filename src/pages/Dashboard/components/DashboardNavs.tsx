import React from 'react';
import { NavLink } from 'react-router-dom';
import { DashboardNavTypes } from 'types';

const DashboardNavs: React.FC<DashboardNavTypes> = (props) => {
  const navLinkStyles = 'flex gap-4 pl-4 h-16 2xl:pl-4 2xl:h-20 items-center';
  return (
    <li>
      <NavLink
        onClick={props.onClick}
        to={props.destination}
        className={({ isActive }) =>
          isActive
            ? `${navLinkStyles}  text-dark50 bg-white`
            : `${navLinkStyles}  text-white`
        }
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default DashboardNavs;
