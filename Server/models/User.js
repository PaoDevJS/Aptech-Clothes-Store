import mongoose from "mongoose"

const isUserSchema = new mongoose.Schema({
    Phone: {
        type: String,
        unique: true
    },
    Birthday: {
        type: Date
    },
    Sex: {
        type: String
    }, 
    Avatar: {
        type: String,
        default: "https://nguyetanh.vn/wp-content/uploads/2015/10/default_avatar.png"
    },
    Address: {
        type: String
    }
}, { 
    timestamps: true
})

export default mongoose.model("User", isUserSchema)