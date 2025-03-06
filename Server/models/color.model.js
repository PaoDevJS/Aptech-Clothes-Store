import mongoose from "mongoose"

const ColorSchema = new mongoose.Schema({
    name: { type: String, required: true }
}, {
    timestamps: true
})

export default mongoose.model("Color", ColorSchema)