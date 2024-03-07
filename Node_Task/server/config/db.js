import mongoose from "mongoose"

export const connectMongoose = (url) => {
    return mongoose.connect(url);
}