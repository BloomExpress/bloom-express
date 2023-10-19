import express from "express";
import { createNewContact } from "../Controllers/ContactController.js";
const router = express.Router();

// route for creating new contact
router.post("/createContact", createNewContact);

export default router;
