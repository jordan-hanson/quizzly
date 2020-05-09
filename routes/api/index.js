const router = require("express").Router();
const quizResults = require("./quizzes");
const userRoutes = require("./users")

// Quiz routes
router.use("/api/savequiz", quizResults);
console.log("We hit the route")
router.use("/api/users", userRoutes)
console.log("api user route", userRoutes)

module.exports = router;
