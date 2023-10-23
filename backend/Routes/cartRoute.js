import express from "express";
import {
  createCart,
  //   updateCart,
  //   getAllItemsInCart,
  //   deleteBouquetByName,
} from "../Controllers/CartController.js";

const router = express.Router();

router.post("/create", createCart);

// router.patch("/updateCart", updateCart);

// router.get("/allItemsInCart", getAllItemsInCart);

// router.delete("/delete/bouquetName/:name", deleteBouquetByName);

export default router;
