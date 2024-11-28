import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: ["true", "please provide a product name"],
        trim: true,
        maxlength: [120, "product name should not be max than 120 chars"]
    },
    price: {
        type: Number,
        required: ["true", "please provide a product price"],
        maxlength: [5, "product name should not be max than 5 char"]
    },
    description: {
        type: String
    },
    photos: [
        {
            secure_url: {
                type: String,
                required: true
            }
        }
    ],
    stock: {
        type: Number,
        default: 0
    },
    sold: {
        type: Number,
        default: 0
    },
    collectionId: {
        ref: "collection"
    }   
},{timestamps: true})

export default mongoose.model("Product", productSchema)