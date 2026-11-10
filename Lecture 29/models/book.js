const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    authorName: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    file: {
        data: Buffer,
        contentType: String
    },
    price: {    
        type: Number,
        min: 0
    },
    referenceLink: {
        type: String,
    },
    notes: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "note"
        }],
        default: []
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    category: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model("book", bookSchema);