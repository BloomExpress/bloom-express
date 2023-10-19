import express from "express";
import { createNewFaq } from "../Controllers/FaqController.js";
const router = express.Router();

// route for creating new faq
router.post('/createFaq', createNewFaq);


export default router;