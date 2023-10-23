import { StatusCodes } from "http-status-codes";
import Newsletter from "../Models/Newsletter.js";

export const createNewsletter = async (req, res) => {
  const { bouquetOfTheMonth, exclusiveDiscount, floralTips } = req.body;
  try {
    const createdNewsletter = await Newsletter.create({
      bouquetOfTheMonth,
      exclusiveDiscount,
      floralTips,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ message: "Newsletter created", createdNewsletter });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

export const getAllNewsletters = async (req, res) => {
  try {
    const newsletters = await Newsletter.find();

    return res.status(StatusCodes.OK).json(newsletters);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

export const deleteNewsletterById = async (req, res) => {
  try {
    const newsletter = await Newsletter.findByIdAndDelete(req.params.id);

    if (!newsletter) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "newsletter not found" });
    }

    return res.status(StatusCodes.OK).send({ message: "Newsletter deleted" });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
