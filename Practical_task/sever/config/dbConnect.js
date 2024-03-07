import mongoose from "mongoose";

export default function dbConnect(url) {
  return mongoose.connect(url);
}
