const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoschema = new Schema({
    description: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Todo', todoschema);