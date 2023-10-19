import Faq from "../Models/Faq.js";
import { StatusCodes } from "http-status-codes";

export const createNewFaq = async (req, res) => {
  const { question, answer } = req.body;
  try {
    const faq = await Faq.create({
      question,
      answer,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ message: "faq created successfully", faq });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
