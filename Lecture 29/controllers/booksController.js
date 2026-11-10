const mongoose = require("mongoose");
const Book = require("../models/book");

const bookFields = [
    "title",
    "description",
    "authorName",
    "createdAt",
    "file",
    "referenceLink",
    "notes",
    "user",
    "category"
];

const getBookFields = (body) => {
    if (!body || typeof body !== "object" || Array.isArray(body)) {
        return null;
    }

    return Object.fromEntries(
        bookFields
            .filter((field) => Object.hasOwn(body, field))
            .map((field) => [field, body[field]])
    );
};

const handleError = (res, error) => {
    if (error.name === "ValidationError" || error.name === "CastError") {
        return res.status(400).json({ message: error.message });
    }

    console.error("Book request failed:", error);
    return res.status(500).json({ message: "Internal server error" });
};

const populateBook = (query) => query
    .populate("notes")
    .populate({ path: "user", select: "name email course age" });

const getBooks = async (req, res) => {
    try {
        const books = await populateBook(Book.find().sort({ createdAt: -1 }));
        return res.status(200).json(books);
    } catch (error) {
        return handleError(res, error);
    }
};

const getBookById = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: "Invalid book ID" });
    }

    try {
        const book = await populateBook(Book.findById(req.params.id));
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        return res.status(200).json(book);
    } catch (error) {
        return handleError(res, error);
    }
};

const createBook = async (req, res) => {
    const bookFields = getBookFields(req.body);
    if (!bookFields) {
        return res.status(400).json({ message: "Request body must be an object" });
    }

    try {
        const book = await Book.create(bookFields);
        await book.populate([
            { path: "notes" },
            { path: "user", select: "name email course age" }
        ]);
        return res.status(201).json({
            message: "Book created successfully",
            data: book
        });
    } catch (error) {
        return handleError(res, error);
    }
};

const updateBook = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: "Invalid book ID" });
    }

    const bookFields = getBookFields(req.body);
    if (!bookFields) {
        return res.status(400).json({ message: "Request body must be an object" });
    }
    if (Object.keys(bookFields).length === 0) {
        return res.status(400).json({ message: "At least one book field is required" });
    }

    try {
        const book = await populateBook(
            Book.findByIdAndUpdate(req.params.id, bookFields, {
                new: true,
                runValidators: true
            })
        );
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        await book.populate([
            { path: "notes" },
            { path: "user", select: "name email course age" }
        ]);
        return res.status(200).json({
            message: "Book updated successfully",
            data: book
        });
    } catch (error) {
        return handleError(res, error);
    }
};

const deleteBook = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: "Invalid book ID" });
    }

    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        return res.status(200).json({
            message: "Book deleted successfully",
            data: book
        });
    } catch (error) {
        return handleError(res, error);
    }
};

module.exports = { getBooks, getBookById, createBook, updateBook, deleteBook };
