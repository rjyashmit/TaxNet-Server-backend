import mongoose, { isValidObjectId } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = 'mongodb+srv://Tax_net:2MXf4bHnc8P6Ujgx@cluster0.vffmd4h.mongodb.net/data';

const connectDB = async () => {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(function (connection) {
                console.log('MongoDB connected successfully');
            })
            .catch(function (error) {
                console.log("Error connecting to MongoDB");
            });

    } catch (error) {
        console.log(error);
    }
};

export default connectDB;