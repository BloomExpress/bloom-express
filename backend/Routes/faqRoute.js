import express from "express";
import { createNewFaq, deleteFaqById, findFaqById, getAllFaqs, updateFaqById } from "../Controllers/FaqController.js";
const router = express.Router();

// route for creating new faq
router.post('/createFaq', createNewFaq);

// route for getting all faqs

router.get('/getAllFaqs', getAllFaqs);

//route for getting and updating faq by id

router.patch('/updateById/:id', updateFaqById);

//route for getting faq by id

router.get('/findById/:id', findFaqById);

// route for deleting faq by id

router.delete('/deleteById/:id', deleteFaqById);

export default router;