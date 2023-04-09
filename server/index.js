import express from "express";
import cors from 'cors';
import Connection from "./database/db.js";
import Route from './routes/route.js';
const app = express();
app.use(cors());
app.use('/',Route);
Connection();
const PORT= 8000;

app.listen(PORT,()=>console.log(`Server running on ${PORT}`)); 