import express from 'express';
import dotenv from 'dotenv';
dotenv.config();      

import mongoose from 'mongoose';
import cors from 'cors';
import chatbotRoutes from './routes/chatbot.route.js';

const app = express();

const port = process.env.PORT || 3000;
console.log("GROQ KEY:", process.env.GROQ_API_KEY);   

// middleware
app.use(express.json());
app.use(cors());

//Database Connection
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("Connected to MongoDB"))
.catch((error)=> console.log("Error connecting to MongoDB:", error));

// Routes
app.use("/bot/v1/", chatbotRoutes);

app.listen(port, () =>
  console.log(`Server is Running on Port ${port}`)
);

