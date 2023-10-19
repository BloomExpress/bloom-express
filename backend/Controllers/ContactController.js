import Contact from "../Models/Contact.js";
import { StatusCodes } from "http-status-codes";

export const createNewContact = async (req, res) => {
  const { firstName, lastName, email, message } = req.body;
  try {
    const contact = await Contact.create({
      firstName,
      lastName,
      email,
      message,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ message: "contact created successfully", contact });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
