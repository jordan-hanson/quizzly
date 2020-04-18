const router = require("express").Router();
// const quizRoutes = require("./quizzes");
const userRoutes = require("./users")

// Quiz routes
// router.use("/quiz", quizRoutes);
console.log("We hit the route")
router.use("/api/users", userRoutes)
console.log("api user route", userRoutes)

module.exports = router;
