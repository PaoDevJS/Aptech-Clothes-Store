import mongoose from "mongoose"

const isAccountSchema = new mongoose.Schema({
    Email: {
        type: String,
        unique: true,
        required: true
    },
    Password: {
        type: String,
        required: true,
        min: 8
    },
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
})

export default mongoose.model("Account", isAccountSchema)