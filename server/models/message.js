const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 1024
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;