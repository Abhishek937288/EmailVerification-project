import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Authnavbar from "../components/Authnavbar/Authnavbar";

const Authlayout = () => {
  return (
    <> 
    <Authnavbar/>
    <Outlet/>
    </>
  )
};

export default Authlayout;
