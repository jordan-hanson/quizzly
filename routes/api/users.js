const router = require("express").Router();
const userController = require("../../controllers/userController");


// This allows someone to create a user
router.post('/register', userController.create);

// // this gets all the users
router.get('/', userController.findAll);


router.delete('/:id', (req, res) => {
    console.log(req.params.id)
    return res.status(200).json(req.params.id)
})







module.exports = router;
