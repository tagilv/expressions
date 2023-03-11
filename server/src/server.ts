import cors from "cors";
import router from "./routes/test.js";
import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
import expressionRoutes from "./routes/expressionRoutes.js";

const app = express();
const port = process.env.PORT || 5003;

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
  // When make request to the api/test get the response defined in the test route in test
  app.use("/api", router);
  // base url for everything concerning my expressions
  // whenver this endpoint is called go inside the expressionsRoutes file
  app.use("/api/expressions", expressionRoutes);
};

// Function expressions are invoked to avoid polluting the global scope. Instead of your program being aware of many different functions, when you keep them anonymous, they are used and forgotten immediately.

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.DB || "");
    console.log("MongoDB!!! is running in port", port);
  } catch (error) {
    console.log("error connecting to MongoDB", error);
  }
};

// IIFE - immediatelly invoked function expressions, function is created at the same time as it is called

(async function controller() {
  await connectMongoDB();
  useMiddleWaers();
  loadRoutes();
  startServer();
})();
