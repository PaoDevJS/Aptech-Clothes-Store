import mongoose from "mongoose"

const isAccountSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true,
    },
    LastName: {
        type: String,
        required: true,
    },
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
    },
    isAdmin: {
        type: String,
        default: "customer",
        enum: ["customer", "admin"]
    }
}, {
    timestamps: true
})

export default mongoose.model("Account", isAccountSchema)