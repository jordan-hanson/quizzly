const db = require("../models");

// Defining methods for the quizController
module.exports = {
  findAll: function (req, res) {
    let payload = {}
    if (req.query.email) {
      payload.email = req.query.email
    }

    console.log(payload, 'this is the payload')

    db.Quiz
      .find(payload)
      .sort({ id: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    console.log('this is find by id quiz')
    db.Quiz
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log('We are about to save!! a nequiz!!', req.body)
    console.log('this is our quiz model!!!', db.Quiz)
    db.Quiz
      .create(req.body)
      .then((dbModel) => {
        console.log('we saved a quiz!!', dbModel)
        res.json(dbModel)
      })
      .catch((err) => {
        console.log('this is our ERR!!!', err)
        res.status(422).json(err)
      });
  },
  update: function (req, res) {
    db.Quiz
      .findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findQuiz: function (req, res) {
    console.log('heyyyyyyyyyyyy')
    let payload = {}
    if (req.query.email) {
      payload.email = req.query.email
    }

    console.log('hey this is payload', payload)
    db.Quiz
      .find(payload)
      .sort({ id: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

};
