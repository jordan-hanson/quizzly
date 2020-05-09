/* eslint-disable no-console */
const express = require("express");
const { join } = require("path");
const morgan = require("morgan");
const app = express();
//const quizAPI = require("./routes/api/quizzes")
const mongoose = require("mongoose");
const delegateRoutesFor = require("./routes");
const bodyParser = require("body-parser");
const PORT = process.env.SERVER_PORT || 3001;

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

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
//app.use(quizAPI);
app.use(delegateRoutesFor);

// app.post('/api/savequiz', function (req, res) {
//   console.log('body in new custom route', req.body)
// })

//delegateRoutesFor



//app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
//app.use(bodyParser.json({ limit: "50mb", extended: true }));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "development") {
  app.use(express.static("client/build"));
}
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/quizzly", { useNewUrlParser: true });
// Add routes, both API and view

//elegateRoutesFor(app)
// app.post("/api/savequiz", function (req, res) {
//   console.log("we hit the route", req.body)
// })

app.use(morgan("dev"));
app.use(express.static(join(__dirname, "build")));

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
