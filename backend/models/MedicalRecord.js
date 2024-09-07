import mongoose, { Schema } from "mongoose";

const medicalRecordSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  patientId: { type: Schema.Types.ObjectId, ref: "User" },
  doctorId: { type: Schema.Types.ObjectId, ref: "User" },
}, {
    timestamps: true,
    collection: "medical-records"
});

const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema);
export default MedicalRecord;
