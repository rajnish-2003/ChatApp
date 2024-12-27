import mongoose from "mongoose";

const url="mongodb://localhost:27017";

const Connection = async () => {
  mongoose
  .connect(url)
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log("error while connecting to database", err));
};

export default Connection;
