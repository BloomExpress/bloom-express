import { StatusCodes } from "http-status-codes";
import Cart from "../Models/Cart.js";

export const createCart = async (req, res) => {
  const { userId, bouquetId, quantity } = req.body;

  try {
    const newCart = await Cart.create({
      userId,
      cartItems: [{ bouquetId, quantity }],
    });

    return res
      .status(StatusCodes.CREATED)
      .json({ message: "Cart created with item", cart: newCart });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Error creating cart" });
  }
};

export const updateCart = async (req, res) => {
  const { bouquetId, quantity } = req.body;

  try {
    const cart = await Cart.findById(req.params.id); // Find the cart by its ID

    if (!cart) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: "Cart not found" });
    }

    // Push the new item to the cartItems array
    cart.cartItems.push({ bouquetId, quantity });

    // Save the updated cart
    await cart.save();

    return res.status(StatusCodes.OK).json({
      message: "Cart updated successfully",
      cart,
    });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Error updating cart" });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Cart.find({})
      .populate({
        path: "userId",
        select: "firstName lastName email",
      })
      .populate({
        path: "cartItems.bouquetId",
        select: "name price",
      });

    return res.status(StatusCodes.OK).send({ orders });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

export const getOrdersByUserId = async (req, res) => {
  try {
    const orders = await Cart.find({ userId: req.params.id }).populate({
      path: "userId",
      select: "firstName lastName email",
    });

    return res.status(StatusCodes.OK).send({ orders });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

export const deleteCartById = async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id);

    if (!cart) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Cart not found" });
    }

    return res.status(StatusCodes.OK).json({ message: "Cart deleted" });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
