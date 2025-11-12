import express from 'express';
import { ENV } from './lib/env.js';

import dotenv from "dotenv";
dotenv.config();

const app = express();

console.log(ENV.PORT);

app.get('/',(req,res) =>{
    res.status(200).json({message : "Success from backend 123"});
});

app.listen(ENV.PORT, ()=>{
    console.log('Server running at port',ENV.PORT);
});
