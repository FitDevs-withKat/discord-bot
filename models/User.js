const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    author_id: String,
    username: String,
    total: Number
});

module.exports = mongoose.model("User", userSchema);