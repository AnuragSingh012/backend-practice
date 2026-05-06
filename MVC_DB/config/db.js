const { mongoose } = require("mongoose");

connectDB = () => {
    return mongoose.connect("mongodb://localhost:27017/fileDB")
    .then(()=>console.log("Database connected"))
    .catch(()=>console.log("Error while connecting to database"))
}

module.exports = connectDB;