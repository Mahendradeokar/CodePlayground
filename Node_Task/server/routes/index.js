import express from "express";
import { authRouter } from "./auth/index.js";
import { adminRouter } from "./admin/index.js";
import { vendorRouter } from "./vendor/index.js";
import { customerRouter } from "./customer/index.js";
import { asyncWrapper } from "../utils/asyncWrapper.js";
import { userTypes } from "../constants/index.js";
import authMiddleware from "./../middlewares/authMiddleware.js";

const router = express.Router();

router.use("/auth", authRouter);
router.use(
  "/admin",
  asyncWrapper(authMiddleware(userTypes.admin)),
  adminRouter
);
router.use(
  "/vendor",
  asyncWrapper(authMiddleware(userTypes.vendor)),
  vendorRouter
);
router.use(
  "/customer",
  asyncWrapper(authMiddleware(userTypes.customer)),
  customerRouter
);

export { router };
