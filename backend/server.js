import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import path from 'path';
// import connectDB from './config/connectDB.js';
// import userRoute from './routes/user.route.js';

import cors from 'cors';

dotenv.config();
const app = express();
const PORT=process.env.PORT || 8000



//connectDB();

//middlewares
app.use(express.json());
app.use(cors(
    // {
    //     origin:"http://localhost:5173",
    //     credentials:true
    // }
));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

//routes
//app.use('/api/users', userRoute);



app.use('/',(req,res)=>{
    res.send('Server is running')
})







app.listen(PORT, () => {
   
    console.log(`Serve running at:  http://localhost:${PORT}`);
})