import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import AboutUs from '../../Component/AboutUs/AboutUs';
import Header from '../../Component/Header/Header';
import Home from '../../Component/Home/Home';
import { SideNav } from '../../Component/SideNav/SideNav';
export default function Main() {
  return (
    <div>
      <Header />
      <SideNav />
      <Router>
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
