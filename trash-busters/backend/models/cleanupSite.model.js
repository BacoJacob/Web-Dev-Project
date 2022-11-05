const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cleanupSiteSchema = new Schema({
    username: { type: String, required: true},
    description: { type: String, required: true },
}, {
    timestamps : true,
});

const CleanupSite = mongoose.model('CleanupSite', cleanupSiteSchema);

module.exports = CleanupSite;