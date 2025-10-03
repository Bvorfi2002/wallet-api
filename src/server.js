import express from 'express';
import dotenv from 'dotenv';
import {initDB} from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';
import transactionsRoute from './routes/transactionsRoute.js';

dotenv.config();

const app = express();

//middleware
app.use(rateLimiter);
app.use(express.json());

// app.use((req,res,next) => {
//     console.log("het we hit req");
//     next();
// });


const PORT = process.env.PORT ;
// connectDB(process.env.DATABASE_URL);



app.use('/api/transactions', transactionsRoute);

initDB().then(() => {
    app.listen(PORT, () => {
  console.log('Server is running on port:', PORT);
    })
});

