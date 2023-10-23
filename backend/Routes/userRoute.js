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
    changingPassword
} from "../Controllers/UserController.js";
const router = express.Router();

import { nameValidator, emailValidator, cityValidator, mobilePhoneValidator, zipCodeValidator, passwordValidator } from "../helpers/userValidation.js"


// route for user
router.post('/createUser', nameValidator(), emailValidator(), cityValidator(), zipCodeValidator(), mobilePhoneValidator(), passwordValidator(), createNewUser);
router.get('/getAllUsers', getAllUsers);
router.get('/findById/:uId', findUserById);
router.get('/findByEmail', findUserByEmail);
router.patch('/updateById/:uId', updateById);
router.patch('/findByEmailAndUpdate/', findByEmailAndUpdate);
router.put('/findByIdAndUpdate/:uId', updateAllField);
router.delete('/findByIdAndDelete/:uId', deleteUserBasedById);
router.post('/subscribe/:uId', subscribe);
router.post('/login', login);
router.post('/changPass', changingPassword);

export default router;