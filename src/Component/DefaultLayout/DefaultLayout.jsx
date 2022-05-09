import React from 'react';
import Header from '../../Component/Header/Header';
import { SideNav } from '../../Component/SideNav/SideNav';
import { Outlet } from 'react-router-dom';
export default function DefaultLayout() {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <Header />
      <SideNav />
      {/* -render your component home/about */}
      <Outlet />
    </div>
  );
}
