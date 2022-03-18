const express = require("express");
const router = express.Router();
const EventEmitter = require("events");
const { VerificationMail, WelcomeMail, AdminMail} = require("../utils")
const User = require("../models/user.model");


const eventEmitter = new EventEmitter()
router.post("", async (req, res) => {
    
  try {
    const user = await User.create(req.body);

    eventEmitter.on("UserRegistered", VerificationMail);
    eventEmitter.on("UserRegistered", WelcomeMail);
    eventEmitter.on("UserRegistered", AdminMail);
    eventEmitter.emit("UserRegistered", {
      from : "super-user@masai.com",
      to : user.email,
      user,

    })
    // await sendMail({from : "admin@masai.com", to : user.email, subject : "Welcome to Masai school", text : "Please verify your email", html : "<b>This is the html tag</b>"});
    res.send("Mail sent")    
      
  } catch (er) {
    return res.status(500).send(er.message);
  }
});

// Get method to get all users
router.get("", async (req, res) => {
  try {
    // variables responsible for pagination
    const page = req.query.page || 1;
    const size = req.query.size || 15;

    // validation for size more than 15
    if (size > 15) {
      return res.send("Please enter a valid size");
    }

    // query to find any specific thing in document
    // const age = { age: req.query.age };
    // if (query.length > 0) {
    //   var user = await User.find(age)
    //     .skip((page - 1) * size)
    //     .limit(size)
    //     .lean()
    //     .exec();
    // } else {
      var user = await User.find()
        .skip((page - 1) * size)
        .limit(size)
        .lean()
        .exec();
    // }

    let TotalPages = Math.ceil((await User.find().countDocuments()) / size);
    return res.send({ user, TotalPages });
  } catch (er) {
    return res.status(500).send(er.message);
  }
});
// get user by id
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean().exec();
    return res.send(user);
  } catch (er) {
    return res.status(500).send(er.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.send(user);
  } catch (er) {
    return res.status(500).send(er.message);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    return res.send(user);
  } catch (er) {
    return res.status(500).send(er.message);
  }
});
module.exports = router;


// router.post("", async (req, res) => {
//   try {
//     const user = await User.create(req.body);
//     return res.status(201).send(user);
//   } catch (er) {
//     return res.status(500).send(er.message);
//   }
// });
