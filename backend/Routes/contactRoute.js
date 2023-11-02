import express from "express";
import {
  createNewContact,
  getAllContacts,
  getContactById,
  deleteContactById,
} from "../Controllers/ContactController.js";

const router = express.Router();

router.post("/createContact", createNewContact);
router.get("/getAllContacts", getAllContacts);
router.get("/getContactById/:id", getContactById);
router.delete("/deleteContactById/:id", deleteContactById);

export default router;
