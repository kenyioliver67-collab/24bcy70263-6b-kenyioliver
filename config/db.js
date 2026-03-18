const mongoose = require("mongoose");

let isConnected = false;

const connectDB = async() => {
    if (isConnected) {
        console.log("Using existing DB connection");
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGO_URI);

        isConnected = db.connections[0].readyState;
        console.log("MongoDB Connected Successfully");

    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        throw error;
    }
};

module.exports = connectDB;