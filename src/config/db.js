// Step 1. Connecting to Mongo db Database using connection string
//connection string = mongodb://localhost:27017/Pagination

// Database = mongodb
// Host name = localhost
// port no. = 27017
// Db name = Pagination

const mongoose = require("mongoose");
module.exports = () =>{
    mongoose.connect("mongodb://localhost:27017/pagination");
}
