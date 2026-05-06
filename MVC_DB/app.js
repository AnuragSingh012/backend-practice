const express = require("express");
const app = express();
const connectDB = require("./config/db");
const fileRoutes = require("./routes/fileRoute");
app.use(express.json());


// app.use("/file", fileRoutes);

app.get("/", (req,res)=> {
    res.send("App is up and running");
})


startServer = async () => {
    await connectDB();
    app.listen(3000, ()=> {
        console.log("App is running on http://localhost:3000");
    })
}

startServer();