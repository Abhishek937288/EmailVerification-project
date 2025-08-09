import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Signup from "./pages/Signup/Signup";
import { getAuth } from "./Util/auth";
import PublicLayout from "./Layouts/Public";
import VerifyOtp from "./components/VerifyOtp/VerifyOtp";
import Authlayout from "./Layouts/Authlayout";
import RootLayout from "./Layouts/RootLayout";

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
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route element={<PublicLayout />}>
            <Route element={<Authlayout />}>
              <Route path="/signup" element={<Signup />} />
              <Route path="/verifyotp/:email" element={<VerifyOtp />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
