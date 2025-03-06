import mongoose from "mongoose"

const isBrandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String
    }
})

export default mongoose.model("Brand", isBrandSchema)