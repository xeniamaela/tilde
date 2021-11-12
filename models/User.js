const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema(
    {  
        email : {
            type: String,
            required: [true, "Email is required."]
        },
        password: {
            type: String,
            required: [true, "Password is required."]
        }, 
        firstName: {
            type: String,
            required: [true, "First name is required."]
        },
        lastName: {
            type: String,
            required: [true, "Last name is required."]
        },
        shippingAddress: {
            type: String,
            required: [true, "Shipping address is required."]
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        cart: [
            {
                productId: {
                    type: String,
                    required: [true, "Product Id is required."]
                },
                addedOn: {
                    type: Date,
                    required: [true, "Date added is required."]
                }, 
                quantity: {
                    type: Number,
                    default: 1
                }
            }
        ]
    }
);

module.exports = mongoose.model('User', userSchema);