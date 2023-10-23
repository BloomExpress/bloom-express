import express from "express";
import {
  createBouquet,
  updateBouquetById,
  deleteBouquetById,
} from "../Controllers/BouquetController.js";

const router = express.Router();

router.post("/create", createBouquet);

router.patch("/update/:id", updateBouquetById);

router.delete("/delete/:id", deleteBouquetById);

export default router;
