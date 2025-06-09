import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        Username: { type: String, required: true },
        Password: { type: String, required: true },
    }
);

export default mongoose.models.UserAccounts || mongoose.model("UserAccounts", UserSchema);