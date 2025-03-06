import mongoose from "mongoose"

const SizeSchema = new mongoose.Schema({
    name: { type: String, required: true }
}, { timestamps: true })

export default mongoose.model("Size", SizeSchema)