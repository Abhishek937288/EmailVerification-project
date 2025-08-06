import "./App.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Signup from "./pages/Signup/Signup";
import RootLayout from "./Layouts/layouts";
import { getAuth } from "./Util/auth";
import PublicLayout from "./Layouts/Public";
import VerifyOtp from "./components/VerifyOtp/VerifyOtp";
import Authlayout from "./Layouts/Authlayout";

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
       <ToastContainer />
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Route>
        <Route element={<PublicLayout />}>
         <Route element={<Authlayout/>}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/verifyotp/:email" element={<VerifyOtp />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
