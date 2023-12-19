const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const authRoute = require("./routes/auth");
const cors = require('cors');
// const User = require("./models/User");

const port = process.env.PORT || 8000;

mongoose.connect(process.env.MongoDB_URl).then(() => {
    console.log("Database is connected!");
}).catch((e) => {
    console.log(e);
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.use("/", authRoute);

app.listen(port, () => {
    console.log(`Backend server is running on port ${port}`);
})