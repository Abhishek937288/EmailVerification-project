import React, { useState } from "react";
import "./VerifyOtp.css";
import { data, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const VerifyOtp = () => {
  const { email } = useParams();
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        setOtp("");
      }
    } catch (e) {
      toast.error(e.message);
      setOtp("");
    }
    setOtp("")
  };

  return (
    <div className="otpPage">
      <div className="otp-container">
        <h2>Verify OTP</h2>
        <form onSubmit={handleSubmit} className="otp-form">
          <input
            type="number"
            name="otp"
            value={otp}
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
