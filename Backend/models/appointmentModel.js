import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    userid: { type: String, required: true },
    docid: { type: String, required: true },
    date: { type: Number, required: true },
    slotDate: { type: String, required: true },
    slotTime: { type: String, required: true },
    userdata: { type: Object, required: true },
    docdata: { type: Object, required: true },
    amount: { type: Number, required: true },
    cancelled: { type: Boolean, default: false },
    payment: { type: Object, required: true },
    iscompleted: { type: Boolean, default: false },  
})

const appointmentModel = mongoose.models.appointments || mongoose.model('appointment', appointmentSchema);
export default appointmentModel;