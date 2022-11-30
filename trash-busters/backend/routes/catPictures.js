const router = require('express').Router();
let Picture = require('../models/catPicture.model');

router.route('/').get((req, res) => {
    Picture.find()
        .then(pictures => res.json(pictures))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const url = req.body.url;

    const newCatPicture = new Picture({url});

    newCatPicture.save()
        .then(() => res.json('Cat picture added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;