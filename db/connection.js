import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("MongoDB connection failed", error);
    }
}

export default connection;