import { Router } from "express";
import { vendorRouter } from "./vendor.js";
import { authRouter } from "./auth.js";

const rootRouter = Router();

rootRouter.get("/health", (_, res) => {
  res.sendResponse.success({});
  res.send("Is health...");
});

rootRouter.use("/vendor", vendorRouter);
rootRouter.use("/auth", authRouter);

export default rootRouter;
