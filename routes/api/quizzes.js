const router = require("express").Router();
const quizController = require("../../controllers/quizController");

// Matches with "/api/quiz"
router.route("/")
  .get(quizController.findAll)
  .post(quizController.create);

// Matches with "/api/quiz:id"
router
  .route("/:id")
  .get(quizController.findById)
  .put(quizController.update)

router.route("/api/savequiz")
  .post(quizController.create)

router.route("/api/viewquizzes")
  .get(quizController.findQuiz)

module.exports = router;
