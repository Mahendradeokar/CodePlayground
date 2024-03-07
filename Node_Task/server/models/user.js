import mongoose, { Schema, model } from "mongoose";
import { userTypes } from "../constants/index.js";
import { CustomError } from "../utils/CustomError.js";

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    isRequired: true,
  },
  name: {
    type: String,
    isRequired: true,
  },
  password: {
    type: String,
    isRequired: true,
  },
  roleType: {
    type: String,
    isRequired: true,
    enum: [userTypes.admin, userTypes.customer, userTypes.vendor],
  },
  isDisable: {
    type: Boolean,
    isRequired: true,
  },
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: false,
  }
});

userSchema.post("save", function (error, doc, next) {
  if (error.name === "MongoServerError" && error.code === 11000) {
    throw new CustomError(`${Object.keys(error.keyValue)[0]} is already exists`, 404);
  } else {
    throw new CustomError(error, 500)
  }
});

export const UserModel = model("User", userSchema);
