import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import AboutUs from '../../Component/AboutUs/AboutUs';
import DefaultLayout from '../../Component/DefaultLayout/DefaultLayout';
import Header from '../../Component/Header/Header';
import Home from '../../Component/Home/Home';
import Login from '../../Component/Login/Login';
import { SideNav } from '../../Component/SideNav/SideNav';
import Title from '../../Component/Title/Title';
export default function Main() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<Signup />} /> */}

          <Route path="/my-app" element={<DefaultLayout />}>
            <Route path="about-us" element={<AboutUs />} />
            <Route path="home" element={<Home />} />
            <Route path=":id" element={<Title />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

// /login ->login
// /my-app/home default +home
// /my-app/about-us default +Aboutus
