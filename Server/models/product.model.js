import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true
    },
    stocks: {
        type: Number,
        required: true
    },
    sizeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Size"
    },
    colorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Color"
    },
    brandId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand"
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categories"
    },
    images : {
        type: Array,
        required: true
    },
    status: {
        type: String,
        default: "On",
        enum: ["Off", "On"]
    }
}, {
    timestamps: true
})

export default mongoose.model("Product", ProductSchema)