const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 8000;

mongoose.connect(process.env.MongoDB_URl).then(() => {
    console.log("Database is connected!");
}).catch((e) => {
    console.log(e);
})

const server = http.createServer((req, res) => {
    if (req.url === "/")
        return res.end(home);
    else
        return res.end("<h1>404 Page Not Found");
});

server.listen(port, () => {
    console.log(`Backend server is running on port ${port}`);
})