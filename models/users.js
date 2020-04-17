const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
  }
);

const quizSchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: "users", required: true },
    answers: [
      {
        type: {
          type: String,
          trim: true,
          required: "What Quiz do you want to take?"
        },
        question1: {
          type: String,
          trim: true,
          required: "Enter an Answer"
        }
      }
    ]
  }
);


const Users = mongoose.model("users", usersSchema);
const Quiz = mongoose.model("quiz", quizSchema);

module.exports = {
  Users,
  Quiz
};

