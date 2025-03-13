const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, default: 'name' },
    description: { type: String },
    image: { type: String, default: 'anh' },
    slug: { type: String },
    createdAt: { type: Date, default: Date.now() },
    update: { type: Date, default: Date.now() },
    videoId: { type: String },
});

module.exports = mongoose.model('Course', Course);
