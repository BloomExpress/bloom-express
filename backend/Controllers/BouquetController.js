import { StatusCodes } from "http-status-codes";
import Bouquet from "../Models/Bouquet.js";

export const createBouquet = async (req, res) => {
  const {
    name,
    price,
    color,
    description,
    image,
    category,
    isAvailable,
    isFeatured,
    customerReviews,
  } = req.body;
  try {
    const newBouquet = await Bouquet.create({
      name,
      price,
      color,
      description,
      image,
      category,
      isAvailable,
      isFeatured,
      customerReviews,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ message: "Bouquet created", newBouquet });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

export const getAllBouquets = async (req, res) => {
  try {
    // http://localhost:5000/allBouquets?limit=20&skip=20 (20 is default limit, skip=20 will return the next 20 bouquets starting from 21th)
    const limit = Number(req.query.limit) || 20;
    const skip = Number(req.query.skip) || 20;

    const bouquets = await Bouquet.find({}).limit(limit).skip(skip);

    res.status(StatusCodes.OK).json(bouquets);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

export const updateBouquetById = async (req, res) => {
  try {
    const bouquet = await Bouquet.findByIdAndUpdate(req.params.id, {
      price: req.body.price,
      isAvailable: req.body.isAvailable,
      isFeatured: req.body.isFeatured,
      customerReviews: req.body.customerReviews,
    });

    if (!bouquet) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Bouquet not found" });
    }

    return res
      .status(StatusCodes.NO_CONTENT)
      .json({ message: "Bouquet updated successfully" });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

export const deleteBouquetById = async (req, res) => {
  try {
    const bouquet = await Bouquet.findByIdAndDelete(req.params.id);

    if (!bouquet) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Bouquet not found" });
    }

    return res.status(StatusCodes.OK).send({ message: "Bouquet deleted" });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
