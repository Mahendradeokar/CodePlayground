import express from "express";
import { asyncWrapper } from "../../utils/asyncWrapper.js";
import { activeVendor, getVendorsController } from "../../controllers/admin/index.js";

const adminRouter = express.Router();

adminRouter.get("/vendors", asyncWrapper(getVendorsController));
adminRouter.post("/vendors/:vendorId", asyncWrapper(activeVendor));


export { adminRouter };
