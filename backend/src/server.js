import express from "express";
import { ENV } from "./lib/env.js";
import path from "path";

import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
dotenv.config();

const app = express();

const __dirname = path.resolve();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Success from root endpoint" });
});

// make our app ready for deployment

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log(`✅ Server is running at port ${ENV.PORT}`);
    });
  } catch (error) {
    console.log("💥 Error starting server",error);
  }
};
startServer();
  