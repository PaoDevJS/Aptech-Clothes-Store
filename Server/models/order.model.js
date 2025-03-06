import mongoose from "mongoose"

const OrderSchema = new mongoose.Schema({
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
    totalPrice: {
        type: Number,
        require: true
    },
    status: {
        type: String,
        default: "Chờ xử lý",
        enum: ["Chờ xử lý", "Đang chuẩn bị hàng", "Giao Hàng", "Đã hủy", "Đã giao"]
    },
    payment: {
        type: String,
        required: true
    }
})

export default mongoose.model("Order", OrderSchema)