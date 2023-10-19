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
