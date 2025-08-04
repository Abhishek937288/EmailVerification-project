import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const auth = true;
  return (
    <div className="navCompo">
      <div className="left-nav">
        <h1>logo</h1>
      </div>
      <div className="right-nav">
        <Link to={"/"}>home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        {auth ? (
          <>  signout </>
        ) : (
          <>
            <Link to={"/signup"}>Signup</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
