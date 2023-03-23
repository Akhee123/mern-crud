const express = require('express')
const router = express.Router();

router.route('/').get((req, res) => {
    res.status(200).json({message: 'Get all users'})
})

router.route('/').post((req, res) => {
    res.status(200).json({message: 'Create a new user'})
})

router.route('/:id').get((req, res) => {
    res.status(200).json({message: `Get user ${req.params.id}`})
})

router.route('/:id').put((req, res) => {
    res.status(200).json({message: `Update user ${req.params.id}`})
})

router.route('/:id').delete((req, res) => {
    res.status(200).json({message: `Delete user ${req.params.id}`})
})

module.exports = router;