import "./App.css";

import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Signup from "./pages/Signup/Signup";
import RootLayout from "./Layouts/layouts";
import { getAuth } from "./Util/auth";
import Navbar from "./components/Navbar";
import SigninLayout from "./Layouts/SigninLayout";


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
        <Route element={<MainLayout />}>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Route>

        <Route element={<SigninLayout/>}>
        <Route element={<RootLayout />}>
          <Route path="/signup" element={<Signup />} />
          </Route>
        </Route>
      </Routes>
      <footer>footer</footer>
    </div>
  );
}

export default App;
