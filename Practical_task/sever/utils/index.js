import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const asyncErrorHandler = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

export const sendResponse = (req, res, next) => {
  return {
    success: ({ data = null, statusCode = 200 }) => {
      res.status(statusCode).json({
        isSuccess: true,
        statusCode,
        data,
      });
    },
    error: ({ errorMessage = "Something went wrong!", statusCode = 500 }) => {
      res
        .status(statusCode ?? 500)
        .json({ isSuccess: false, errorMessage, statusCode });
    },
  };
};

export const validateFields = (obj) => {
  const invalidatedField = [];
  Object.entries(obj).forEach(([field, value]) => {
    if (!value) {
      invalidatedField.push(field);
    }
  });

  if (invalidatedField.length) {
    return `Field are required, Field: ${invalidatedField.toString()}`;
  }
  return null;
};

export class CustomError extends Error {
  constructor(message, statusCode) {
    super();
    this.name = "CustomError";
    this.statusCode = statusCode;
    this.message = message;
  }
}

export const bcryptPwd = (pwd) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(pwd, 5, function (err, hash) {
      if (err) {
        reject(er);
      } else {
        resolve(hash);
      }
    });
  });
};

export const comparePwd = (pwd, hashedPwd) => {
  return bcrypt.compare(pwd, hashedPwd);
};

export const signJWT = (payload) => {
  const jwtToken = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return jwtToken;
};

export const verifyJWT = (token) => {
  console.log("tokne...", token);
  const data = jwt.verify(token, process.env.JWT_SECRET);
  console.log("data....", data);
  return data;
};

export const extractToken = (authenticationHeader) => {
  const token = authenticationHeader.split(" ")[1];
  return token;
};
