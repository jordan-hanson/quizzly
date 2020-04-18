const express = require("express");
const mongoose = require("mongoose");
const delegateRoutesFor = require("./routes");
const app = express();
const PORT = process.env.PORT || 8080;
const bodyParser = require("body-parser");

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "development") {
  app.use(express.static("client/build"));
}
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/quizzly");
// Add routes, both API and view

delegateRoutesFor(app)

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
