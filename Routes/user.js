const express = require("express");
const router = express.Router();
const User = require("../Schemas/user.js");

router.post("/", async (req, res) => {
  try {
    await User.create({
      firstName: req.body.firstName,
      middleName: req.body.middleName,
      lastName: req.body.lastName,
      dateOfBirth: Date.now(),
      userName: req.body.userName,
      password: req.body.password,
      gender: req.body.gender,
      phoneNumber: req.body.phoneNumber,
      email: req.body.bio,
      bio: req.body.firstName,
      createdOn: Date.now(),
      lastUpdatedOn: Date.now(),
    });
    let user = await User.find({ userName: req.body.userName });
    res.status(200).json({ user: user });
  } catch (error) {
    console.log(`Error : ${error}`);
    res.status(400).send("Failed to add user");
  }
});

router.get('/',async(req, res) => {
  let users = await User.find({})
  res.header("Access-Control-Allow-Origin", "*");
  res.status(200).json({users : users})
})

module.exports = router;
