import mongoose, { Schema } from "mongoose";

// create a new Schema in which we have only two fields, doctor and patient and both are foreign keys to user
const doctorPatientRelSchema = new Schema({
  doctor: { type: Schema.Types.ObjectId, ref: "User" },
  patient: { type: Schema.Types.ObjectId, ref: "User" },
});

const DoctorPatientRel = mongoose.model("DoctorPatientRel", doctorPatientRelSchema)
export default DoctorPatientRel;


