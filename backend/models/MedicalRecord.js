import mongoose, { Schema } from "mongoose";

const medicalRecordSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  patientId: { type: Schema.Types.ObjectId, ref: "User" },
}, {
    timestamps: true,
    collection: "medical-records"
});

export default mongoose.model("MedicalRecord", medicalRecordSchema);
