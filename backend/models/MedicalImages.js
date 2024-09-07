import mongoose, { Schema } from "mongoose";

const ImageSchema = new Schema({
    imageURL: { type: String, required: true },
    title: { type: String, required: true },
    patient: { type: Schema.Types.ObjectId, ref: "User" },
    doctor: { type: Schema.Types.ObjectId, ref: "User" }
}, {
    timestamps: true,
    collection: "medical-images",
});

const MedicalImage = mongoose.model("MedicalImages", ImageSchema);
export default MedicalImage

