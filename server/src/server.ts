import cors from "cors";
import router from "./routes/test.js";
import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
import expressionRoutes from "./routes/expressionRoutes.js";

const app = express();
const port = process.env.PORT || 5005;

const useMiddleWaers = () => {
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
  };
  app.use(cors(corsOptions));
};

const startServer = () => {
  // Function takes port and accepts a callback
  app.listen(port, () => {
    console.log("server is running" + port);
  });
};

const loadRoutes = () => {

  app.use("/api", router);

  app.use("/api/expressions", expressionRoutes);
};


const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.DB || "");
    console.log("MongoDB!!! is running in port", port);
  } catch (error) {
    console.log("error connecting to MongoDB", error);
  }
};



(async function controller() {
  await connectMongoDB();
  useMiddleWaers();
  loadRoutes();
  startServer();
})();
