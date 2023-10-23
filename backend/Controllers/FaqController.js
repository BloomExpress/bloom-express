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

export const getAllFaqs = async (req, res) => {
  try {
    const faqs = await Faq.find({}).lean(true);
    return res
      .status(StatusCodes.OK)
      .json({ faqs, message: "all faqs were retrieved...!" });
  } catch (error) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "could not get all faqs...!" });
  }
};


export const findFaqById = async (req, res) => {
  try {
      const faq = await Faq.findById(req.params.id).lean(true);
      if (faq) {
          return res.status(StatusCodes.OK).json({ faq });
      }
      return res
          .status(StatusCodes.NOT_FOUND)
          .json({ message: `faq with id=(${req.params.id}) not found...!` });
  } catch (error) {
      return res
          .status(StatusCodes.NOT_FOUND)
          .json({ message: error.toString() });
  }
};


export const updateFaqById = async (req, res) => {
  try {
    const faq = await Faq.findByIdAndUpdate(req.params.id, {
      question: req.body.question,
      answer: req.body.answer,
    });

    if (!faq) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Faq not found" });
    }

    return res
      .status(StatusCodes.OK)
      .json({ message: "Faq updated successfully" });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

export const deleteFaqById = async (req, res) => {
  try {
    const faq = await Faq.findByIdAndDelete(req.params.id);

    if (!faq) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Faq not found" });
    }

    return res.status(StatusCodes.OK).send({ message: "Faq deleted" });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};


