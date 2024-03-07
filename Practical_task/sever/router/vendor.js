import { Router } from "express";
import { asyncErrorHandler } from "../utils/index.js";
import {
  approveVendor,
  deleteVendor,
  getAllVendors,
} from "../controllers/vendors.js";
import { authMiddleware } from "../middlewares/auth.js";
import { USER_TYPE } from "../constants/index.js";

const vendorRouter = Router();

vendorRouter.use(authMiddleware([USER_TYPE.ADMIN]));
vendorRouter.get("/", asyncErrorHandler(getAllVendors));
vendorRouter.put("/approve/:vendorId", asyncErrorHandler(approveVendor));

vendorRouter.delete("/:vendorId", asyncErrorHandler(deleteVendor));

export { vendorRouter };
