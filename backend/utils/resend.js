import { Resend } from "resend";
import {env} from "envgaurd";
import dotenv from 'dotenv'; 
dotenv.config();

const resend = new Resend(process.env.RESETAPI_KEY);

export default resend;