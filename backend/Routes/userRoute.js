import express from "express";
import { createNewUser } from "../Controllers/UserController.js";
const router = express.Router();

// route for creating new user
router.post("/create", createNewUser);

export default router;
