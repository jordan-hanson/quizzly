const { Users } = require("../models/users");

// Defining methods for the quizController
module.exports = {
    findAll: function (req, res) {
        Users
            .find(req.query)
            .sort({ id: -1 })
            .then(dbModel => res.status(200).json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        Users
            .create(req.body)
            .then(dbModel => res.status(200).json(dbModel))
            .catch(err => res.status(422).json(err));
    },

};
