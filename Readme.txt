Note : All the things are done in context to User 

1. Create a project and set it up

2. run command npm init and install necessary modules: mongoose, nodemon, express

3. Create (src>config>db.js | src>controllers | src>models)

4. controller imports : (
    {
        const express = require("express");
        const router = express.Router();
        const User = require("../models/user.model");
    }
)

5. controller exports : (
    {
        module.exports = router
    }
)

6. model imports = (
    {
        const mongoose = require("mongoose");
    }
)
//mongoose.model takes two arguements (1 : collection name, 2 : schema)

7. model exports = (
    {
        model.exports = new mongoose.model("user", userSchema)
    }
)

App.use takes two arguements (1 : middleware, 2 : Methodname)
8. App.js imports = (
    {
        const express = require("express");
        const connect = require("./src/config/db");
        const userController = require("./src/controllers/user.controller");
        const app = express();
    }
)

//connection to database

db.js = (
    const mongoose = require("mongoose");
    module.exports = () =>{
    mongoose.connect("mongodb://localhost:27017/Pagination");
    }
)

