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

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    return res.status(StatusCodes.OK).json(contacts);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

export const getContactById = async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await Contact.findById(id);
    if (!contact) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Contact not found" });
    }
    return res.status(StatusCodes.OK).json(contact);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

export const deleteContactById = async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await Contact.findByIdAndRemove(id);
    if (!contact) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Contact not found" });
    }
    return res
      .status(StatusCodes.OK)
      .json({ message: "Contact deleted successfully" });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
