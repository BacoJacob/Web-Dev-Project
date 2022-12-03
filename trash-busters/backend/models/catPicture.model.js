const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const catPictureSchema = new Schema({
    url: { type: String, required: true},
}, {
    timestamps : true,
});

const CatPicture = mongoose.model('CatPicture', catPictureSchema);

module.exports = CatPicture;
