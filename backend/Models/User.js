import { model, Schema } from "mongoose";

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: {
        country: { type: String, default: "Germany" },
        city: { type: String, required: true },
        zipCode: { type: Number, required: true },
        street: { type: String, required: true },
        houseNumber: { type: String, required: true }
    },
    email: { type: String, required: true },
    password: { type: String, required: true },
    mobilePhone: { type: String, required: true }

}, { timestamps: true });

const User = model('user', userSchema);
export default User;
