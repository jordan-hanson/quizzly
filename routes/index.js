const path = require("path");
const router = require("express").Router();
const users = require("./api/users");
const quizRoutes = require("./api/quizzes");



//module.exports = function (app) {
console.log('app is hookin gup to routes file!!!')
router.use("/api/users", users)
router.use("/api/savequiz", quizRoutes)
router.use("/api/viewquizzes", quizRoutes)



//return app;
//}

module.exports = router;


