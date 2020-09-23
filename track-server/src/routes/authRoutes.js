const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const User = mongoose.model('User');


router.post('/signup', (req, res) => {
    console.log(req.body);
    res.send('you made a post request');
});

module.exports = router;