const mongoose = require ('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Product name is required."]
        },
        description: {
            type: String,
            require: [true, "Product description is required."]
        },
        image: {
            type: String,
            required: [true, "Image is required."]
        },
        price: {
            type: Number,
            required: [true, "Price is required."] 
        },
        sizes: {
            type: Array,
            required: [true, "Size is required."]
        },
        inventory: {
            type: Number,
            required: [true, "Inventory is required."]
        },
        isActive: {
            type: Boolean,
            default: true
        },
        createdOn: {
            type: Date,
            required: [true, "Date created is required."]
        }
    }
);