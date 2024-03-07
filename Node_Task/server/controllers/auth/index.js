import mongoose from "mongoose";
import { userTypes } from "../../constants/index.js";
import { UserModel } from "../../models/user.js";
import { CustomError } from "../../utils/CustomError.js";
import { loginShema, signupSchema } from "../../utils/joiValidator.js";
import { singJWT } from "../../utils/jwt.js";

export const singupController = async (req, res) => {
  const { name, email, password, type, vendorId } = req.body;
  const { value, error } = signupSchema.validate(
    {
      name,
      email,
      password,
      type,
    },
    { errors: { label: true, wrap: { label: false } } }
  );

  const isVendorIdRequired = type === userTypes.customer
  const isVendorIdInvalid = isVendorIdRequired &&  !mongoose.Types.ObjectId.isValid(vendorId);


  if (error || isVendorIdInvalid) {
    throw new CustomError(error?.message ?? "Vendor id is not valid", 400);
  }

  const isDisable = type.toUpperCase() === userTypes.vendor;

  let user = await UserModel.create({
    name,
    email,
    password,
    roleType: type,
    isDisable,
    vendorId: isVendorIdRequired ? vendorId : undefined,
  });

  user = user.toObject();

  delete user.password;
  delete user.__v;

  res.status(200).json({
    msg: "User created successfuly!",
    data: user,
    isSuccess: true,
  });
};

export const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  const { value, error } = loginShema.validate({
    email,
    password,
  });

  if (error) {
    throw new CustomError(error.message, 400);
  }

  const user = await UserModel.findOne({
    email,
  })
    .select("+password")
    .lean();

  if (!user) {
    throw new CustomError("User not found!", 404);
  }

  if (user.password !== password) {
    throw new CustomError("Password not match", 400);
  }

  console.log(user)

  const token = singJWT({ id: user._id });

  return res.status(200).json({
    msg: "Login sucessfully",
    isSuccess: true,
    data: {
      token,  
    },
  });
};
