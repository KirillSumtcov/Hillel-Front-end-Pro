const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product