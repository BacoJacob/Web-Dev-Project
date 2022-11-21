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

router.route('/:id').get((req, res) => {
    CleanupSite.findById(req.params.id)
    .then(cleanupSite => res.json(cleanupSite))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    CleanupSite.findByIdAndDelete(req.params.id)
    .then(cleanupSite => res.json('Cleanup site deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    CleanupSite.findById(req.params.id)
    .then(cleanupSite => {
        cleanupSite.username = req.body.username;
        cleanupSite.description = req.body.description;

        cleanupSite.save()
        .then(() => res.json('Cleanup site updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
