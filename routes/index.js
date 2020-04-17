const path = require("path");

const users = require("./api/users");



function delegateRoutesFor(app) {
  app.use("/api/users", users)



  return app;
}

module.exports = delegateRoutesFor;


