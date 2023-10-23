import express from "express";
import { createNewsletter } from "../Controllers/NewsletterController.js";

const router = express.Router();

router.post("/create", createNewsletter);

export default router;
