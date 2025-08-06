import React, { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { toast } from "react-toastify";
import axios from "axios";

const Signup = () => {
  const bakendUrl = import.meta.env.BACKENDURL;
  const navigate = useNavigate();
  const [formstate, setFormstate] = useState("Signin");
  const [formdata, setFormdata] = useState(
    formstate === "Signup"
      ? {
          username: "",
          email: "",
          password: "",
        }
      : {
          email: "",
          password: "",
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
    } else {
      try{
        const response = await axios.post("http://localhost:8080/api/auth/signIn",formdata,{withCredentials:true});
        const data = response.data ;
        if(data.success){
          toast.success(data.message);
          navigate("/");
        }else{
          toast.error(data.message);
          setFormdata({ email: "", password: "" });
        }
      }catch(err){
      toast.error(err.message);
          setFormdata({ email: "", password: "" });
      }
      setFormdata({ email: "", password: "" });
    }
  };

  return (
    <div className="form-container">
      <div className="form">
        {formstate == "Signup" ? <h1>Signup</h1> : <h1>SignIn</h1>}

        <form onSubmit={handleSubmit}>
          {formstate == "Signup" && (
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
            <input
              type="password"
              name="password"
              placeholder="enter password"
              required
              value={formdata.password}
              onChange={handleonChange}
            />
          </div>

          <button>{formstate === "Signup" ? "Signup" : "Signin"}</button>
        </form>
        {formstate == "Signup" ? (
          <p>
            already have account{" "}
            <a
              className="anchor"
              onClick={() => {
                setFormstate("signin");
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
          </p>
        )}
      </div>
    </div>
  );
};

export default Signup;
