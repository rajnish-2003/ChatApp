import express from 'express';
import Connection from './database/dbs.js';
import route from './routes/routes.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';



dotenv.config();
const app = express();


const PORT = 8000;

app.use(cors({

    origin:'http://localhost:3000',
    methods:["GET","POST","PATCH","DELETE","PUT"],
    credentials:true,    //to use cookie

}));
app.use(cookieParser());
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));
app.use('/',route);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
Connection();


