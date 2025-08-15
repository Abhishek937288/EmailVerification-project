import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { userContext } from "../../context/userContext";
import { useContext } from "react";

const Signup = () => {
  const { setVerify } = useContext(userContext);
  const bakendUrl = import.meta.env.BACKENDURL;
  const navigate = useNavigate();
  const [formstate, setFormstate] = useState("Signin"); // instead of having one page for login and sign up haveing multiple page is better
  const [formdata, setFormdata] = useState(
    formstate === "Signup"
      ? {
          username: "",
          email: "",
          password: "",
        }
      : formstate === "Signin"
      ? {
          email: "",
          password: "",
        }
      : {
          username: "",
          email: "",
        }
  );

  const handleonChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formstate === "Signup") {
      setVerify("Signup");
      try {
        const response = await axios.post(
          "http://localhost:8080/api/auth/signUp",
          formdata,
          { withCredentials: true }
        );
        const data = response.data;
        if (data.success) {
          toast.success(data.message);
          navigate(`/verifyotp/${formdata.email}`);
        } else {
          toast.error(data.message);
        }
      } catch (err) {
        toast.error(err.message);
      }
      setFormdata({ username: "", email: "", password: "" });
    } else if (formstate === "Signin") {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/auth/signIn",
          formdata,
          { withCredentials: true }
        );
        const data = response.data;
        if (data.success) {
          toast.success(data.message);
          navigate("/");
        } else {
          toast.error(data.message);
          setFormdata({ email: "", password: "" });
        }
      } catch (err) {
        toast.error(err.message);
        setFormdata({ email: "", password: "" });
      }
      setFormdata({ email: "", password: "" });
    } else {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/auth/forgotPass",
          formdata,
          { withCredentials: true }
        );
        const data = response.data;
        if (data.success) {
          toast.success(data.message);
          navigate(`/verifyotp/${formdata.email}`);
        }
      } catch (error) {
        toast.error(error.message);
      }
      setFormdata({ username: "", email: "", password: "" });
    }
  };

  return (
    <div className="form-container">
      <div className="form">
        {formstate === "Signup" ? (
          <h1>Signup</h1>
        ) : formstate === "Forgotpass" ? (
          <h1>Forgot Password</h1>
        ) : (
          <h1>SignIn</h1>
        )}

        <form onSubmit={handleSubmit}>
          {(formstate == "Signup" || formstate == "Forgotpass") && (
            <div>
              <input
                type="text"
                name="username"
                placeholder="username"
                required
                value={formdata.username || ""}
                onChange={handleonChange}
              />
            </div>
          )}

          <div>
            <input
              type="email"
              name="email"
              placeholder="enter your email"
              required
              value={formdata.email}
              onChange={handleonChange}
            />
          </div>

          <div>
            {(formstate === "Signup" || formstate === "Signin") && (
              <input
                type="password"
                name="password"
                placeholder="enter password"
                required
                value={formdata.password || ""}
                onChange={handleonChange}
              />
            )}
          </div>

          <button>Submit</button>
        </form>
        {formstate == "Signup" ? (
          <p>
            already have account{" "}
            <a
              className="anchor"
              onClick={() => {
                setFormstate("Signin");
              }}
            >
              login here
            </a>
          </p>
        ) : (
          <p>
            Create Account{" "}
            <a
              className="anchor"
              onClick={() => {
                setFormstate("Signup");
              }}
            >
              Signup
            </a>
            <br />
            <br />
            <a
              onClick={() => {
                setFormstate("Forgotpass");
              }}
              className="anchor"
            >
              forgot password
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Signup;
