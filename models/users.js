const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema(
  {
    user_email: { type: String },
    answers: [
      {
        question1: {
          type: String,

        },
        question2: {
          type: String,

        }
      }
    ]
  }
);


//const Users = mongoose.model("users", usersSchema);
const Quiz = mongoose.model("quiz", quizSchema);

module.exports = {
  // Users,
  Quiz
};

