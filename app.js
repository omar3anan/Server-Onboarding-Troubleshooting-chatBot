const express = require("express");
const app = express();
const morgan = require("morgan");
const providers = require("./controllers/providers");
const email = require("./controllers/email");
const bodyParser = require("body-parser");
const responseRoutes = require("./controllers/responseRoutes"); // Replace with the actual path to your route file
const path = require("path");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
// Set EJS as the view engine
app.set("view engine", "ejs");

// Set the views directory (optional, but recommended)
app.set("views", path.join(__dirname, "views"));
app.use(morgan("dev"));
app.use("/", providers);
app.use("/", email);

// app.use("/", responseRoutes);
module.exports = app;
