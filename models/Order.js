const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: [true, "User id is required."]
        },
        totalAmount: {
            type: Number,
            required: [true, "Total amount is required."]
        },
        purchasedOn: {
            type: Date,
            required: [true, "Data purchased is required."]
        },
        isFulfilled: {
            type: Boolean,
            default: false
        },
        products: [
            {
                productId: {
                    type: String,
                    required: [true, "Product ID is required."] 
                },
                quantity: {
                    type: Number,
                    required: [true, "Quantity is required."]
                }
            }
        ]
    }
);