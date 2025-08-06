import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PublicLayout = () => {
  const auth = false;
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

export default PublicLayout;
