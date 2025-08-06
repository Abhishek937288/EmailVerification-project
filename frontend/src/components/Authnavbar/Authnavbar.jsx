import React from 'react';
import "./Authnavbar.css";
import { Link } from 'react-router-dom';

const Authnavbar = () => {
  return (
    <div className='auth-nav'>
        <Link to={"/signup"}> Back to signup </Link>
        <Link to={"/"}> home</Link>
    </div>
  )
}

export default Authnavbar