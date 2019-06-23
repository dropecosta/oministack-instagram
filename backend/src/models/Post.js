const mongose = require('mongoose');

const PostSchema = new mongose.Schema({
    author: String,
    place: String,
    description: String,
    hashtags: String,
    image: String,
    likes: {
        type: Number,
        default: 0,
    },
}, {
        timestamps: true,
    });

module.exports = mongose.model('Post', PostSchema);