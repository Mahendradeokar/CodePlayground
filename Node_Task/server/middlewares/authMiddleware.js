import { UserModel } from "../models/user.js";
import { CustomError } from "../utils/CustomError.js";
import { asyncWrapper } from "../utils/asyncWrapper.js";
import { verifyJWT } from "../utils/jwt.js";

const authVerfied = (roleType) => {
  return async function (req, res, next) {
    const { authorization } = req.headers;

    console.log("first", authorization);
    if (!authorization?.startsWith("Bearer ")) {
      throw new CustomError("Unautorized user", 401);
    }

    const token = authorization.substring(7);
    console.log("sec", authorization);
    const isValid = verifyJWT(token);

    if (!isValid) {
      throw new CustomError("Unautorized user", 401);
    }
    console.log(isValid)
    const user = await UserModel.findById(isValid.id).lean();
    if (user.roleType === roleType) {
      req.user = user;
      next();
      return;
    }

    throw new CustomError("Unautorized user", 401);
  };
};

export default authVerfied;
