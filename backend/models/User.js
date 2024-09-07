import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  userType: { type: String, required: true, default: 'patient' },
}, {
  timestamps: true,
  collection: "users"
});

const User = mongoose.model("User", userSchema);
export default User;
