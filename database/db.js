const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI;
        console.log("MONGO_URI:", mongoURI);

     
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("✅ MongoDB connected successfully...........");
    } catch (err) {
        console.error("❌ MongoDB connection error:", err.message);
    }
};

module.exports = connectDB;
