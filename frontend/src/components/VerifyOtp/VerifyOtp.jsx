import React, { useState } from "react";
import "./VerifyOtp.css";
import { data, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { userContext } from "../../context/userContext";

const VerifyOtp = () => {
  const {verify ,setVerify} = useContext(userContext);
  const { email } = useParams();
  const [formdata, setFormdata] = useState(
    verify === "Signup" ? {otp:""} : {otp:"",newPassword:""}
  );
  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value}=  e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (verify === "Signup") {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/auth/verify",
          { email, otp },
          { withCredentials: true }
        );
        const data = response.data;
        if (data.success) {
          toast.success(data.message);
          navigate("/");
        } else {
          toast.error(data.message);
         setFormdata({
          otp:""
        });
        }
      } catch (e) {
        toast.error(e.message);
        setFormdata({
          otp:""
        });
      }
      setVerify("");
    } else {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/auth/verifyForgotpass",
          { email, ...formdata },
          { withCredentials: true });
          const data = response.data;
          if(data.success){
            toast.success(data.message);
            navigate("/signUp");
            setFormdata({
              otp:"",
              newPassword:""
            })
          }else{
            toast.error(data.message);
            setFormdata({
              otp:"",
              newPassword:""
            })
          }
      } catch (error) {
        toast.error(error.message);
        setFormdata({
              otp:"",
              newPassword:""
            })
      }
    }
   setFormdata({
              otp:"",
              newPassword:""
            });
  };

  return (
    <div className="otpPage">
      <div className="otp-container">
        <h2>Verify OTP</h2>
        <form onSubmit={handleSubmit} className="otp-form">
          {
            verify !== "Signup" && (
              <input
            type="password"
            name="newPassword"
            value={formdata.newPassword}
            onChange={handleChange}
            placeholder="new password"
            required
            className="otp-input"
          />
            )

          }
          <input
            type="number"
            name="otp"
            value={formdata.otp}
            onChange={handleChange}
            placeholder="Enter OTP"
            required
            className="otp-input"
          />
          <button className="otp-button">Verify</button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtp;
