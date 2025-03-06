import mongoose from "mongoose"

const CartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },
            quantity: {
                type: Number,
                default: 1
            },
            sizeId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Size"
            },
            colorId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Color"
            },
        }
    ],
})

export default mongoose.model("Cart", CartSchema)