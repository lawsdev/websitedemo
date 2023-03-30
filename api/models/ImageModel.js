const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageModelSchema = Schema({
    imageUrl: {
        type: String,
        required: true
    },
    assetName: {
        type: String,
        required: true
    }
});

const ImageModel = mongoose.model("ImageModel", ImageModelSchema);

module.exports = ImageModel;