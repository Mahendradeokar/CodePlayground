import express from "express";
import { asyncWrapper } from "../../utils/asyncWrapper.js";
import { getCustomerData } from "../../controllers/customer/index.js";

const customerRouter = express.Router();

customerRouter.get("/", asyncWrapper(getCustomerData));

export { customerRouter };
