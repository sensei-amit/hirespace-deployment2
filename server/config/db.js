import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected',() => console.log('Database Connected'))

    await mongoose.connect(`${process.env.MONGODB_URI||"mongodb+srv://test_01:akDgFy69uzZ8r4p6@cluster0.y7xes2u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"}/job-portal`)
}

export default connectDB;
