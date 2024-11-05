import jwt from 'jsonwebtoken'; // Import jwt
import bcrypt from 'bcrypt'; // Import bcrypt
import doctorModel from '../models/doctorModel.js';
import appointmentModel from '../models/appointmentModel.js';   // Import the appointment model


// Api for doctor to login
const loginDoctor = async (req, res) => {

    try {

        const { email, password } = req.body // Get the email and password from the request body
        const user = await doctorModel.findOne({ email }) // Find the doctor by email

        if (!user) {
            return res.json({ success: false, message: 'Doctor not found' }) // If doctor not found, return error message
        }
        const isMatch = await bcrypt.compare(password, user.password) // Compare the password

        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET) // Create a token
            res.json({ success: true, token }) // Return the token
        }else{
            res.json({ success: false, message: 'Incorrect Password' }) // If password is incorrect, return error message
        }
    }catch (err) {
        console.log(err) // Log the error
        res.json({ success: false, message: err.message }) // Return the error message
    }
}

// Api to get the doctor appointments from the database

const appointmentsDoctor = async (req, res) => {      // Get the appointments of the doctor
    try {

        const { docId } = req.body
        const appointments = await appointmentModel.find({ docId })

        res.json({ success: true, appointments })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}