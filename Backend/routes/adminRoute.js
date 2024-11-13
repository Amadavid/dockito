import express from 'express';
import { loginAdmin, appointmentsAdmin, appointmentCancel, addDoctor, allDoctors, adminDashboard  } from '../controllers/adminController.js';
import { changeAvailablity } from '../controllers/doctorController.js';
import authAdmin from '../middleware/authAdmin.js';
import upload from '../middleware/multer.js';

const adminRouter = express.Router();

adminRouter.post("/login", loginAdmin);
adminRouter.post("/add-doctor", authAdmin, upload.single('image'), addDoctor);
adminRouter.get("/appointments", authAdmin, appointmentsAdmin);
adminRouter.get("/all-doctors", authAdmin, allDoctors);
adminRouter.get("/dashboard", authAdmin, adminDashboard);
adminRouter.post("/change-availability", authAdmin, changeAvailablity);
adminRouter.post("/appointment-cancel", authAdmin, appointmentCancel);



export default adminRouter;