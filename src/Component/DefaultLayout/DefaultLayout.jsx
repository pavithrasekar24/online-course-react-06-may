import React from 'react';
import Header from '../../Component/Header/Header';
import { SideNav } from '../../Component/SideNav/SideNav';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
export default function DefaultLayout() {
  let location = useLocation();
  let navigate = useNavigate();
  let ids = [90, 89, 78, 67];
  let handleNavigate = (id) => {
    navigate('/my-app/' + id);
  };
  console.log(location, location.pathname);
  return (
    <div>
      <h1>Dashboard Page</h1>
      <span>
        Welcome {location && location.state && location.state.userName}
      </span>
      <Header />
      <SideNav />

      {ids.map((item, i) => {
        return (
          <button key={i} onClick={() => handleNavigate(item)}>
            {item}
          </button>
        );
      })}
      {/* -render your sub component home/about */}
      <Outlet />
    </div>
  );
}
