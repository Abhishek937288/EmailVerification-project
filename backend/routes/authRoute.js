import {
  signUp,
  verify,
  signIn,
  signOut,
  forgotPass,
  verifyForgotpass,
} from "../controller/authController.js";
import { Router } from "express";

const router = Router();

router.post("/signUp", signUp); // sign-up | signup
router.post("/verify", verify);
router.post("/signIn", signIn); // sign-in | signin
router.post("/signOut", signOut); // sign-out | signout | logout
router.post("/forgotPass", forgotPass); // forget-password
router.post("/verifyForgotpass", verifyForgotpass); // verify-forget-password

/*
 When you are working in a REST API:
 
  Name your endpoints in kebab-case
   – it's more readable in URLs and widely accepted in REST conventions.
    eg: /sign-up instead of /signUp or /signup

  Keep all endpoint paths in lowercase to avoid case sensitivity issues across different environments.

  Use clear and descriptive names that indicate the action or resource:
  and they should name with the verb not action like below instead of /sign-in-user x that means
  Avoid using verbs in the URL path -> HTTP methods already imply the action:
    - Prefer: POST /sign-in -> correct
    - Avoid: POST /doSignIn -> wrong

    --------------------
    other thing here is also pro version @abhi
*/

export default router;
