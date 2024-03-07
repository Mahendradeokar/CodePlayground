import Joi from "joi";
import { userTypes } from "../constants/index.js";

export const signupSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  name: Joi.string().required(),
  password: Joi.string()
    .min(6) // Minimum password length of 6 characters
    .required(),
  type: Joi.string().valid(userTypes.vendor, userTypes.customer).required(),
});

export const loginShema = Joi.object({
    email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
    password: Joi.string()
    .min(6) // Minimum password length of 6 characters
    .required(),
})