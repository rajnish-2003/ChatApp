
import mongoose from "mongoose";

export const Connection = async (username,password) => {
  const URL =`mongodb+srv://${username}:${password}@cluster1.plfpt.mongodb.net/`
    

  try {
    await mongoose.connect(URL);
    console.log("Database connected Succesfully");

  } catch (e) {
    console.log("error while connecting to database", e.message);
  }
};

export default Connection;

