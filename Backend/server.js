import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import userRouter from './routes/userRoute.js'
import doctorRouter from './routes/doctorRoute.js'

// app configuration

const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()


// MIDDEKWARE

app.use(cors())
app.use(express.json())

// api endpoints
app.use("/api/admin", adminRouter)
app.use("/api/user", userRouter)
app.use("/api/doctor", adminRouter)

app.get('/', (req,res)=>{
    res.send('API IS WORKING ')
})


app.listen(port, ()=> console.log("Server Started",port))