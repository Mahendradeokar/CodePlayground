import { userModel } from "../models/user.js";
import {
  CustomError,
  bcryptPwd,
  comparePwd,
  signJWT,
  validateFields,
} from "../utils/index.js";

export const signup = async (req, res, next) => {
  const { name, pwd, email } = req.body;

  const error = validateFields({ name, pwd, email });

  if (error) {
    throw new CustomError(error, 400);
  }

  const isEmailExists = await userModel.exists({ email: email });

  if (isEmailExists) {
    throw new CustomError(
      "Email already exists, Please use other email..",
      400
    );
  }
  const hashedPwd = await bcryptPwd(pwd);

  await userModel.create({
    name,
    pwd: hashedPwd,
    email,
  });

  res.sendResponse.success({ statusCode: 200 });
};

export const login = async (req, res, next) => {
  const { email, pwd } = req.body;

  const error = validateFields({ email, pwd });
  if (error) {
    throw new CustomError(error, 400);
  }

  const user = await userModel.findOne({ email }).lean();

  if (!user) {
    throw new CustomError("User not found", 404);
  }

  const isPwdMatched = await comparePwd(pwd, user.pwd);

  if (!isPwdMatched) {
    throw new CustomError("Password not matched...", 400);
  }

  const token = signJWT({ id: user._id, email: user.email, role: user.role });

  delete user.pwd;
  return res.sendResponse.success({
    data: {
      token,
      ...user,
    },
    statusCode: 200,
  });
};

export const sendMyProfile = async (req, res) => {
  const { id } = req.user;

  const user = await userModel.findById(id).lean();
  delete user.pwd;

  res.sendResponse.success({
    statusCode: 200,
    data: user,
  });
};
