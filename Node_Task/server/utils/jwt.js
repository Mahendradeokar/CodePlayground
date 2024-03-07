import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { CustomError } from "./CustomError.js";

dotenv.config();

export const singJWT = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "24h"
  });
};

export const verifyJWT = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new CustomError(error.message, 401);
  }
};
