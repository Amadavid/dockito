import express from 'express';
import { loginUser, registerUser, getProfile, updateProfile, bookAppointment, listAppointment, getUserAppointments,cancelAppointment, paymentStripe, verifyStripe } from '../controllers/userController.js';
import authUser from '../middleware/authUser.js';
import upload from '../middleware/multer.js';
const userRouter = express.Router();


userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)

userRouter.get("/get-profile", authUser, getProfile)
userRouter.post("/update-profile", authUser, upload.single('image'), updateProfile)
userRouter.post("/book-appointment", authUser, bookAppointment)
userRouter.get("/list-appointments", authUser, listAppointment);
userRouter.get('/appointments', authUser, getUserAppointments)
userRouter.post("/cancel-appointment", authUser, cancelAppointment)
userRouter.post("/payment-stripe", authUser, paymentStripe)
userRouter.post("/verify-stripe", authUser, verifyStripe)

export default userRouter;