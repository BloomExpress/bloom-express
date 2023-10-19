import User from "../Models/User.js";
import { StatusCodes } from "http-status-codes";

export const createNewUser = async (req, res) => {
    const { firstName, lastName, address, email, password, mobilePhone } = req.body;
    try {
        const user = await User.create({
            firstName, lastName, address, email, password, mobilePhone
        })
        return res.status(StatusCodes.CREATED).json({ message: "user created successfully", user })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.toString() })
    }
}