import express from "express";
import { configDotenv } from "dotenv";
import connectDb from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";
import cookieParser from "cookie-parser";

configDotenv();

const app = express();
const port = process.env.PORT || 5000;
const frontendUrl = process.env.FRONTENDURL;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [frontendUrl],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);

connectDb();

app.listen(port, () => {
  console.log(`our port is running on the ${port}`);
});
// everting here is pro expect you forget to have proper error handler you can check in the improved verion of this code branch
