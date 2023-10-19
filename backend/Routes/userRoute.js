import express from "express";
import { createNewsletter } from "../Controllers/newsletterController.js";
const router = express.Router();

// route for creating new user
router.post("/createNewsletter", createNewsletter);

export default router;
