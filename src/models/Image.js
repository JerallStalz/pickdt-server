const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Image = new Schema({
    fileName: { type: String },
    urlFile: { type: String },
    content: { type: String, default:"manolo" },
    dateUpload: { type: Date, default: Date.now() }
});

module.exports = mongoose.model( "Image", Image );