import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
    product: {
        type: [
            {
                productID: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product"
                },
                count: Number,
                price: Number
            }
        ],
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId ,
        ref: "User",
        reequired: true
    },
    address: {
        type: String,
        required: true,
    },
    phonenumber: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    coupon: String,
    transctionId: String,
    status: {
        type: String,
        enum: ["ORDERED", "SHIPPED", "DELIVERED", "CANCELLED"],
        // TODO: TRY BETTER WAY
        default: "ORDERED"
    }
},{timestamps: true})


export default mongoose.model("Order",orderSchema)