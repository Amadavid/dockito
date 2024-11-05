import jwt from 'jsonwebtoken' // Import jwt

// Middleware to check if doctor is authenticated

const authDoctor = async (req, res, next) => {
    const { dtoken } = req.headers  // Get the token from the header
    if (!dtoken) {
         return res.json({ success: false, message:'Not Authorized Login Again' }) // If no token, return not authorized
         }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
        req.body.docId = token_decode.id // Set the user to the verified token
        next() // Continue
    } catch (err) {
        console.log(err)    // Log the error
        res.json({ success: false, message: err.message })      // If token is invalid, return error message 
    }
}

export default authDoctor;  // Export the middleware 