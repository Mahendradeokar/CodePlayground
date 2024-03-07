import express from "express"
import dotenv from 'dotenv'
import bodyParser from "body-parser";

dotenv.config();

import {errorHandling } from "./middlewares/errorHandling.js"
import { connectMongoose } from "./config/db.js";
import { router } from "./routes/index.js";

const {PORT, MONGODB_URL } = process.env;

const app = express();

app.use(bodyParser.json())

app.use("/", router);


app.use(errorHandling)

app.listen(PORT, () => {
    connectMongoose(MONGODB_URL).then(() => {
        console.log(`Server is listing on the ${PORT} and db is connected`);
    }).catch((error) => {
        console.log("error occured during connecting db........", error);
        process.exit(1);
    });
});
