import React from 'react';
import { Link } from 'react-router-dom';
export function SideNav() {
  const sideNavDetails = [
    { id: 1, pathName: '/my-app/about-us', label: 'AboutUs' },
    { id: 2, pathName: '/my-app/home', label: 'Home' },
    { id: 3, pathName: '/my-app/student', label: 'Student' },
  ];
  return (
    <div className="side-nav">
      {/* <li>
        <Link to="/">About Us </Link>
      </li>
      <li>
        <Link to="/home">Home</Link>
      </li> */}

      {sideNavDetails.map((item, i) => {
        return (
          <li key={i}>
            <Link to={item.pathName}>{item.label}</Link>
          </li>
        );
      })}
    </div>
  );
}
