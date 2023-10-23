import express from "express";
import {
  createNewsletter,
  getAllNewsletters,
  deleteNewsletterById,
} from "../Controllers/NewsletterController.js";

const router = express.Router();

router.post("/create", createNewsletter);

router.get("/allNewsletters", getAllNewsletters);

router.delete("/delete/:id", deleteNewsletterById);

export default router;
