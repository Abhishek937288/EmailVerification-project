import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const SigninLayout = () => {
  const auth = true;
  if (auth) {
    return (
      <>
        <Navigate to={"/"} />
      </>
    );
  } else {
    return (
      <>
        <Outlet />
      </>
    );
  }
};

export default SigninLayout;
