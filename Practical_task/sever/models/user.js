import mongoose, { Schema } from "mongoose";
import { USER_TYPE } from "../constants/index.js";

const userSchema = new Schema({
  name: String,
  pwd: String,
  email: { type: String, unique: true },
  role: {
    type: String,
    enum: [USER_TYPE.VENDOR, USER_TYPE.ADMIN],
    default: USER_TYPE.VENDOR,
  },
  isApprove: {
    type: Boolean,
    default: false,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export const userModel = mongoose.model("User", userSchema);
