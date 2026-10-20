import mongoose from "mongoose";
import dns from "dns";

const MONGO_URL = process.env.MONGO_URL;
// console.log(process.env.NODE_ENV);

// if (process.env.NODE_ENV === "development") {
// setServers(["1.1.1.1", "8.8.8.8"]);
dns.setServers(["8.8.8.8", "1.1.1.1"]);
// }
const connectDB = async () => {
  try {
    if (!MONGO_URL) {
      throw new Error("MONGO_URL is not defined");
    }

    const conn = await mongoose.connect(MONGO_URL);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(
      `Error connecting to database: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    );

    throw error;
  }
};

export default connectDB;
