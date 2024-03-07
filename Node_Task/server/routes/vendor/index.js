import express from "express";
import { asyncWrapper } from "../../utils/asyncWrapper.js";
import { blockCustomer, getCustomers } from "../../controllers/vendor/index.js";
import { userTypes } from "../../constants/index.js";

const vendorRouter = express.Router();

vendorRouter.get(
  "/customers",
  asyncWrapper(getCustomers)
);

vendorRouter.patch("/block/:customerId", asyncWrapper(blockCustomer));

export { vendorRouter };
