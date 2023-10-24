import express from "express";
import {
  createCart,
  updateCart,
  getAllOrders,
  getOrdersByUserId,
  deleteCartById,
} from "../Controllers/CartController.js";

const router = express.Router();

router.post("/create", createCart);

router.patch("/updateCart/:id", updateCart);

router.get("/allOrders", getAllOrders);

router.get("/getOrdersByUser/:id", getOrdersByUserId);

router.delete("/deleteCartById/:id", deleteCartById);

export default router;
