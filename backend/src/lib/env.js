import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
    PORT : process.env.PORT,
    db_url : process.env.db_url,
}