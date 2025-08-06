import UserModel from "../models/usersModel.js";
import bcrypt, { hash } from "bcrypt";
import genTokenAndSetToken from "../utils/genandsetToken.js";
import { sendOtpEmail } from "../utils/sendOtp.js";

// controller for signup
// new comment added

export const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email) {
    return res.json({
      data: null,
      success: false,
      message: "all fields requied",
    });
  }
  if(password.length < 6){
    return res.json({
      data: null,
      success: false,
      message: "password should more that 6 letters",
    });
  }
  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    return res.json({
      data: null,
      success: false,
      message: "user already exsited",
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await new UserModel({
    username,
    email,
    password: hashedPassword,
  }).save();

  const { password: _, ...userWithoutPassword } = user._doc;
  const otp = Math.floor(100000 + Math.random() * 900000);
  user.otp = otp;
  user.otpExiperedAt = new Date(Date.now() + 60 * 60 * 1000);

  await user.save();
  await sendOtpEmail(email, otp);
  //   genTokenAndSetToken(user.id,res);
  return res.json({
    data: userWithoutPassword,
    success: true,
    message: "otp sent successfully",
  });
};


 // controller to verify otp 

export const verify = async (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) {
    return res.json({
      data: null,
      success: false,
      message: "please provide all the filds",
    });
  }
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.json({ data: null, success: false, message: "user not found" });
  }
  if (Date.now() > new Date(user.otpExiperedAt).getTime()) {
    return res.status(400).json({ success: false, message: "OTP expired" });
  }
  if (user.otp !== otp) {
    return res.json({ data: null, success: false, message: "invalid otp" });
  }
  genTokenAndSetToken(user.id, res);
  user.otp = null;
  user.otpExiperedAt = null;
  await user.save();

  return res.json({
    data: null,
    success: true,
    message: "user verification succesfull",
  });
};

// signIn routes

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({
      data: null,
      success: false,
      message: "enter all fields",
    });
  }
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.json({ data: null, success: false, message: "user not found" });
  }
  const isVerified = await bcrypt.compare(password, user.password);
  if (!isVerified) {
    return res.json({
      data: null,
      success: false,
      message: "email or passsword wrong",
    });
  }
  const { password: _, ...userWithoutPassword } = user._doc;
  genTokenAndSetToken(user.id, res);

  return res.json({
    data: userWithoutPassword,
    success: true,
    message: "user signIn successfully",
  });
};

// signOut controller

export const signOut = async (req, res) => {
  res.clearCookie("token", { maxage: 0 });
  return res.json({
    data: null,
    success: true,
    message: "user siginOut succesfully",
  });
};

// forgot password
// email 
/*
geting email
check in db
send email => askjdfhsjkdfhskljdfhalsjfd
http://localhost:5173/reset-password?email=some@gmail&token=askjdfhsjkdfhskljdfhalsjfd
*/
//rest-password

export const forgotPass = async (req, res) => {
  const { username, email } = req.body;
  if ((!username || !email)) {
    return res.json({
      data: null,
      success: false,
      message: "enter all the fields",
    });
  }

  const user = await UserModel.findOne({ username, email });
  if (!user) {
    return res.json({
      data: null,
      success: false,
      message: "username or email wrong",
    });
  }
  const otp = Math.floor(100000 + Math.random() * 900000);
   user.otp = otp;
  user.otpExiperedAt = new Date(Date.now() + 60 * 60 * 1000);
  await user.save();
  await sendOtpEmail(email, otp);
  return res.json( { data: null, success: true, message: "otp sent succesfully" });
};

// to verify forgotpass otp

export const verifyForgotpass = async (req,res)=>{
  const {email, otp ,newPassword}=req.body;
  if(!email || !otp || !newPassword){
    return res.json( { data: null, success: false, message: "enter all the fileds" });
  }
  const user = await UserModel.findOne({email});
  if(!user){
   return res.json( { data: null, success: false, message: "user not found" });
  }
  if (Date.now() > new Date(user.otpExiperedAt).getTime()) {
    return res.json( { data: null, success: false, message: "otp expired" });
  }
  if (user.otp !== otp) {
    return res.json({ data: null, success: false, message: "invalid otp" });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(newPassword, salt); 
  user.password = hashedPassword;
  user.otp = null;
  user.otpExiperedAt = null;
  await user.save();
  const { password: _, ...userWithoutPassword } = user._doc;
  genTokenAndSetToken(user.id, res);
  return res.json({data:userWithoutPassword,success:true,message:"password updated succesfully"});
}