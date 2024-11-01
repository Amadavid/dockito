import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'

// app configuration

const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()


// MIDDEKWARE

app.use(cors())
app.use(express.json())

// api endpoints

app.get('/', (req,res)=>{
    res.send('API IS WORKING ')
})

app.listen(port, ()=> console.log("Server Started",port))