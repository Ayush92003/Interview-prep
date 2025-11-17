import dotenv from "dotenv";

dotenv.config({ quiet: true });

export const ENV = {
  PORT: process.env.PORT,
  db_url: process.env.db_url,
  NODE_ENV: process.env.NODE_ENV,
};
