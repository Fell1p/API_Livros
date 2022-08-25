import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Felipe:123@cluster0.u6xsy1g.mongodb.net/felipe-node");

let db = mongoose.connection;

export default db;