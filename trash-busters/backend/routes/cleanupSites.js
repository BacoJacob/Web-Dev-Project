const router = require('express').Router();
let CleanupSite = require('../models/cleanupSite.model');

router.route('/').get((req, res) => {
    CleanupSite.find()
        .then(cleanupSites => res.json(cleanupSites))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;

    const newCleanupSite = new CleanupSite({username, description});

    newCleanupSite.save()
        .then(() => res.json('Cleanup site added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;