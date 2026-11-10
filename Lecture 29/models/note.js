const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    note: {
        type: String,
        trim: true
    },
    link: {
        type: String,
        trim: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    author: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model("note", noteSchema);
