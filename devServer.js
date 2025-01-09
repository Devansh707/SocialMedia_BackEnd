const express = require("express");
const { urlencoded } = express;
const { connect } = require("mongoose");
const { config } = require("dotenv");
const routes = require("./routes/router");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

//Setting up express
const app = express();
app.options("*", cors());
app.use(cors());
app.use(urlencoded({ limit: "50mb", extended: true }));
app.use(morgan("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use("/", routes);

config();

try {
  connect(process.env.DB_URL);
  console.log("Connected to DB");
  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
  });
} catch (error) {
  console.log(`Error : ${error}`);
}
