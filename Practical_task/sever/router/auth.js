import { Router } from "express";
import { asyncErrorHandler } from "../utils/index.js";
import { login, sendMyProfile, signup } from "../controllers/auth.js";
import { authMiddleware } from "../middlewares/auth.js";
import { USER_TYPE } from "../constants/index.js";

const authRouter = Router();

authRouter.post("/signup", asyncErrorHandler(signup));
authRouter.post("/login", asyncErrorHandler(login));
authRouter.get(
  "/profile",
  authMiddleware([USER_TYPE.VENDOR, USER_TYPE.ADMIN]),
  asyncErrorHandler(sendMyProfile)
);

export { authRouter };
