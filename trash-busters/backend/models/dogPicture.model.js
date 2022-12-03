const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dogPictureSchema = new Schema({
    breed: { type: String, required: true},
    url: { type: String, required: true},
}, {
    timestamps : true,
});

const DogPicture = mongoose.model('DogPicture', dogPictureSchema);

module.exports = DogPicture;
