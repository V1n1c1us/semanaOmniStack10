const mongoose = require('mongoose');
const PointScehma = require('./utils/PointScehma');

const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointScehma,
        index: '2dsphere',
    }
});

module.exports = mongoose.model('Dev', DevSchema);

