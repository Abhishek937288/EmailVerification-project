import express from "express";
import { configDotenv } from "dotenv";
import connectDb from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";
import cookieParser from "cookie-parser"

configDotenv();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/auth",authRoutes);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(cors({
  origin:[],
  methods:["GET","POST","PUT","DELETE"],
  credentials:true
}))

app.use(cookieParser());

connectDb();
app.listen(port, () => {
  console.log(`our port is running on the ${port}`);
});
