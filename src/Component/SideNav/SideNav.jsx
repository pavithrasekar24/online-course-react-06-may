import React from 'react';
import { Link } from 'react-router-dom';
// import {Link} from
export function SideNav() {
  return (
    <div className="side-nav">
      <li>
        <Link to="/">About Us </Link>
      </li>
      <li>
        <Link to="/home">Home</Link>
      </li>
    </div>
  );
}
