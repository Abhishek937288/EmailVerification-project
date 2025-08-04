import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique :true
  },
  password: {
    type: String,
    required: true,
  },
  otp:{
    type:String
  },
  otpExiperedAt:{
    type : Date
  }
 
}, {
   timestamps: true,
});

const UserModel = mongoose.model("User", userSchema);
export default UserModel;
