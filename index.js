import express from "express";
import { config } from "dotenv";
import cors from "cors";
//Setting up express
const app = express();
app.options("*", cors());
app.use(cors());
config();

app.post("/", async (req, res) => {
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

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
