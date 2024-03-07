import express from "express";
import { config } from "dotenv";
import rootRouter from "./router/index.js";
import dbConnect from "./config/dbConnect.js";
import { CustomError, sendResponse } from "./utils/index.js";
import { createAdmin } from "./createAdmin.js";
import cors from "cors";

const app = express();
config();

const { PORT, MONGODB_URL, CREATE_ADMIN } = process.env;
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());  

// CODE ///

app.use(
  "/api/v1",
  (req, res, next) => {
    res.sendResponse = sendResponse(req, res, next);
    next();
  },
  rootRouter
);

app.use("*", (_, res) => {
  res.status(401).send("Please check the API and method");
});

app.use((err, req, res, next) => {
  console.log(err);
  if (err instanceof CustomError) {
    return res.sendResponse.error({
      errorMessage: err.message,
      statusCode: err.statusCode,
    });
  }

  return res.sendResponse.error({ errorMessage: err.message ?? err });
});

if (Boolean(CREATE_ADMIN)) {
  createAdmin();
}

// CODE ///
app.listen(PORT, () => {
  dbConnect(MONGODB_URL).then(() => {
    console.log("Server is listing on :", PORT);
    console.log("DB connected: ", MONGODB_URL);
  });
});
