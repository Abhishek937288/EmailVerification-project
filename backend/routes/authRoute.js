import {signUp ,verify,signIn,signOut,forgotPass,verifyForgotpass} from "../controller/authController.js";
import { Router  } from "express";

const router = Router();

router.post("/signUp",signUp);
router.post("/verify",verify);
router.post("/signIn",signIn);
router.post("/signOut",signOut);
router.post("/forgotPass",forgotPass);
router.post("/verifyForgotpass",verifyForgotpass);

export default router ;