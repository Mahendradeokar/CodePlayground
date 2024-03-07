import express from "express";
import { asyncWrapper } from "../../utils/asyncWrapper.js";
import { loginController, singupController } from "../../controllers/auth/index.js";

const authRouter = express.Router();

authRouter.post("/singup", asyncWrapper(singupController));

authRouter.post("/login", asyncWrapper(loginController));

export { authRouter };
