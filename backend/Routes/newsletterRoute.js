import express from "express";
import { createNewsletter } from "../Controllers/newsletterController.js";

const router = express.Router();

router.post("/create", createNewsletter);

export default router;
