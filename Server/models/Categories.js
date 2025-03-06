import mongoose from "mongoose"

const isCategoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String
    }
})

export default mongoose.model("Categories", isCategoriesSchema)