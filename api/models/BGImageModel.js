const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BGImageModelSchema = Schema({
    imageUrl: {
        type: String,
        required: true
    },
    assetName: {
        type: String,
        required: true
    }
});

const BGImageModel = mongoose.model("BGImageModel", BGImageModelSchema);

module.exports = BGImageModel;