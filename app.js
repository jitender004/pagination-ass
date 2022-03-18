const express = require("express");
const connect = require("./src/config/db");
const userController = require("./src/controllers/user.controller");

const app = express();
app.use(express.json());
app.use("/users", userController);

// connecting to localhost
const start = async ()=>{
    await connect();
    app.listen(4000, ()=>{        
        console.log("Connected on 4000");
    });   
}
start();





