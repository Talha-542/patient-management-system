import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, required: true, default: 'not specified' },
}, {
  timestamps: true,
  collection: "users"
});

export default mongoose.model("User", userSchema);
