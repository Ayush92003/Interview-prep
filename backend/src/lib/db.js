import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV.db_url);
    console.log("✅ Connected to MongoDB:", conn.connection.host);
  } catch (error) {
    console.log("❌ Error connect MongoDB", error);
    process.exit(1);
  }
};
