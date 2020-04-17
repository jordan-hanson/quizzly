const router = require("express").Router();
const quizRoutes = require("./quizzes");

// Quiz routes
router.use("/quiz", quizRoutes);
console.log("We hit the route")

module.exports = router;
