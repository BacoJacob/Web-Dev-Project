const router = require('express').Router();
let Picture = require('../models/dogPicture.model');

router.route('/').get((req, res) => {
    Picture.find()
        .then(pictures => res.json(pictures))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const url = req.body.url;

    const newDogPicture = new Picture({url});

    newDogPicture.save()
        .then(() => res.json('Dog picture added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;