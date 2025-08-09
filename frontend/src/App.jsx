import "react-toastify/dist/ReactToastify.css";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import { getAuth } from "./Util/auth";
import PublicLayout from "./Layouts/Public";
import VerifyOtp from "./components/VerifyOtp/VerifyOtp";
import Authlayout from "./Layouts/Authlayout";
import RootLayout from "./Layouts/RootLayout";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Verify from "./pages/auth/Verify";
import ForgetPassword from "./pages/auth/ForgetPassword";
import ResetPassword from "./pages/auth/ResetPassword";

function MainLayout() {
  const auth = getAuth();
  if (!auth) {
    return <Navigate to={"/signup"} />;
  }
  return (
    <>
      <Outlet />
    </>
  );
}

function App() {
  return (
    <div className="app">
      <Routes>
        <Route element={<RootLayout />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<PublicLayout />}>
            <Route element={<Authlayout />}>
              <Route path="/sign-up" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/verify" element={<Verify />} />
              <Route path="/forget-password" element={<ForgetPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              {/* <Route path="/verifyotp/:email" element={<VerifyOtp />} /> */}
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
