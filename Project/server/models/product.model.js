const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title Required"]

    },
    price: {
        type: Number,
        required: [true, "Price Required"]

    },
    description: {
        type: String,
        required: [true, "Description Required"]

    },
    image: {
        type: String,

    }
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema)