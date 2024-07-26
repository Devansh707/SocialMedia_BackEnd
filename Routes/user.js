import { Router } from "express";
const router = Router();
import userSchema from "../Schemas/user.js";

router.get("/", async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    let user = await userSchema.findOne({ _id: req.query.id });
    if (user) user.lastLoggedIn = Date.now();
    res.status(200).json({ user: user });
  } catch (error) {
    res.status(400).send("Failed to add user");
  }
});

router.post("/", async (req, res) => {
  try {
    let newUser = getUser(req.body);

    let user = await userSchema.create(newUser);

    res.status(200).json({ user: user });
  } catch (error) {
    console.log(`Error : ${error.message}`);
    res.status(400).send(`Failed to add user`);
  }
});

router.put("/", async (req, res) => {
  try {
    let newUser = getUser(req.body);

    if (req.body._id) {
      newUser._id = req.body._id;
      newUser.createdOn = req.body.createdOn;
      newUser.lastLoggedIn = Date.now();
      newUser.lastUpdatedOn = Date.now();
    }

    let user = await userSchema.findOneAndReplace(
      { userName: newUser.userName },
      newUser,
      { upsert: true, new: true }
    );

    res.status(200).json({ user: user });
  } catch (error) {
    console.log(`Error : ${error}`);
    res.status(400).send(`Failed to add user`);
  }
});

router.post("/login", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  let user = await userSchema.findOne({
    userName: req.body.userName,
    password: req.body.password,
  });
  if (user) user.lastLoggedIn = Date.now();
  res.status(200).json({ user: user });
});

router.post("/test", async (req, res) => {
  const statusCode = getRandomStatusCode();

  switch (statusCode) {
    case 200:
      res.status(200).send({
        firstName: "firstName",
        middleName: "middleName",
        lastName: "lastName",
      });
      break;
    case 404:
      res.status(404).send("Not Found");
      break;
    case 500:
      res.status(500).send("Internal Server Error");
      break;
    default:
      res.status(500).send("Unexpected Error");
  }
});

function getRandomStatusCode() {
  const statusCodes = [200, 404, 500];
  const randomIndex = Math.floor(Math.random() * statusCodes.length);
  return statusCodes[randomIndex];
}

const getUser = (request) => {
  return {
    firstName: request.firstName,
    middleName: request.middleName,
    lastName: request.lastName,
    dateOfBirth: Date.parse(request.dateOfBirth),
    userName: request.userName,
    password: request.password,
    gender: request.gender,
    phoneNumber: request.phoneNumber,
    email: request.email,
    bio: request.bio,
    createdOn: Date.now(),
    lastUpdatedOn: Date.now(),
    lastLoggedIn: Date.now(),
    profilePic: request.profilePic,
  };
};

export default router;
