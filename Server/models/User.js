import mongoose from "mongoose"

const isUserSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true,
    },
    LastName: {
        type: String,
        required: true,
    },
    Phone: {
        type: String,
        required: true,
        unique: true
    },
    Birthday: {
        type: Date,
        required: true
    },
    Sex: {
        type: String,
        required: true
    }, 
    Avatar: {
        type: String,
        default: "https://nguyetanh.vn/wp-content/uploads/2015/10/default_avatar.png"
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { 
    timestamps: true
})

export default mongoose.model("User", isUserSchema)