const express = require("express");
const router = express.Router();
const User = require("../Schemas/user.js");

router.get("/", async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    let user = await User.findOne({ userName: req.query.userName });
    if (user) user.lastLoggedIn = Date.now();
    res.status(200).json({ user: user });
  } catch (error) { res.status(400).send("Failed to add user");}
});

router.post("/", async (req, res) => {
  try {
    await User.create({
      firstName: req.body.firstName,
      middleName: req.body.middleName,
      lastName: req.body.lastName,
      dateOfBirth: req.body.dob,
      userName: req.body.userName,
      password: req.body.password,
      gender: req.body.gender,
      phoneNumber: req.body.phoneNumber,
      email: req.body.bio,
      bio: req.body.firstName,
      createdOn: Date.now(),
      lastUpdatedOn: Date.now(),
      lastLoggedIn: Date.now(),
      profilePic: req.body.profilePic,
    });
    let user = await User.find({ userName: req.body.userName });
    res.status(200).json({ user: user });
  } catch (error) {
    console.log(`Error : ${error}`);
    res.status(400).send("Failed to add user");
  }
});

router.post("/login", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  let user = await User.findOne({
    userName: req.body.userName,
    password: req.body.password,
  });
  if (user) user.lastLoggedIn = Date.now();
  res.status(200).json({ user: user });
});

module.exports = router;
