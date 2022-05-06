import React from 'react';
import { Link } from 'react-router-dom';
export function SideNav() {
  const sideNavDetails = [
    { id: 1, pathName: '/about-us', label: 'AboutUs' },
    { id: 2, pathName: '/home', label: 'Home' },
  ];
  return (
    <div className="side-nav">
      {/* <li>
        <Link to="/">About Us </Link>
      </li>
      <li>
        <Link to="/home">Home</Link>
      </li> */}

      {sideNavDetails.map((item) => {
        return (
          <li>
            <Link to={item.pathName}>{item.label}</Link>
          </li>
        );
      })}
    </div>
  );
}
