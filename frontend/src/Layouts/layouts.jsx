import Navbar from "../components/Navbar";
import { Outlet, Navigate } from "react-router-dom";

const RootLayout = () => {
  const auth = true;

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
