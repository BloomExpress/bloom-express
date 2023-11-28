import express from "express";
import {
  createNewUser,
  getAllUsers,
  findUserById,
  findUserByEmail,
  updateById,
  findByEmailAndUpdate,
  deleteUserBasedById,
  updateAllField,
  subscribe,
  login,
  changingPassword,
  // sendNewsletterToUser,
  logoutUser,
} from "../Controllers/UserController.js";
import { authorizeJwt } from "../middleware/auth.js";

const router = express.Router();

import {
  nameValidator,
  emailValidator,
  cityValidator,
  mobilePhoneValidator,
  zipCodeValidator,
  passwordValidator,
  validate,
} from "../helpers/userValidation.js";

// route for user
router.post("/subscribe", subscribe);
// router.post("/sendNewsLetter/:uId", sendNewsletterToUser);

// router.use(authorizeJwt);

router.post(
  "/createUser",
  nameValidator(),
  emailValidator(),
  cityValidator(),
  zipCodeValidator(),
  mobilePhoneValidator(),
  passwordValidator(),
  validate,
  createNewUser
);
router.get("/getAllUsers", getAllUsers);
router.get("/findById/:uId", findUserById);
router.get("/findByEmail", findUserByEmail);
router.patch("/updateById/:uId", updateById);
router.patch("/findByEmailAndUpdate/", findByEmailAndUpdate);
router.put("/findByIdAndUpdate/:uId", updateAllField);
router.delete("/findByIdAndDelete/:uId", deleteUserBasedById);
router.post("/login", login);
router.post("/changPass", changingPassword);
router.get("/logout", logoutUser);

export default router;
