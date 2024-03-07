import { CustomError, extractToken, verifyJWT } from "../utils/index.js";

export const authMiddleware = (roles) => {
  return (req, res, next) => {
    try {
      const authorization = req.headers.authorization;
      console.log(authorization);
      if (!authorization) {
        throw new CustomError(
          "Please provide the auth token in authorization header",
          401
        );
      }

      const token = extractToken(authorization);
      const userData = verifyJWT(token);
      console.log(userData, roles.includes(userData.role));
      if (roles.includes(userData.role)) {
        req.user = userData;
        return next();
      }

      next(new CustomError("Unauthenticated request..", 401));
    } catch (error) {
      console.log(error);
      next(new CustomError("Unauthenticated request..", 401));
    }
  };
};
