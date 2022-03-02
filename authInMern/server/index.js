require('dotenv').config();
const express= require('express');
const app = express();
const cors = require('cors');
const connection = require("./db");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const mongoose = require("mongoose");



//middleware
app.use(express.json())
app.use(cors());

//routes 
app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);

mongoose.connect("mongodb+srv://Anjalikushwaha:Anjali2522@cluster0.vmjdf.mongodb.net/workshop-21?retryWrites=true&w=majority",
 {useNewUrlParser: true})
.then(() => {
console.log("mongo connected")
})
mongoose.connection.on('error', err => {
console.log("db connection error ,${error}")
})

const port = process.env.PORT||443;
app.listen(port,() => console.log(`Listening on port ${port}...`))