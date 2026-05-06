const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    filename: String,
    contentType: String,
    data: Buffer,
    uploadedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("File", fileSchema);