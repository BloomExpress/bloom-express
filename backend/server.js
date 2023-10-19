import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

// importing place for routes
import userRoute from "./Routes/userRoute.js";

import newsletterRoute from "./Routes/newsletterRoute.js";
import contactRoute from "./Routes/contactRoute.js";
import faqRoute from "./Routes/faqRoute.js";

const app = express();
dotenv.config();
// which client have access 
app.use(cors());
// allow json to object transforming 
app.use(express.json());

// Base Route
app.use("/api/users/", userRoute);
app.use("/api/faqs/", faqRoute); 
// app.use("/api/bouquets/", );
// app.use("/api/carts/", );

// app.use("/api/contacts/", );
app.use("/api/newsletter/", newsletterRoute);
app.use("/api/contacts/", contactRoute);
// app.use("/api/payments/", );

mongoose.connect(`${process.env.DB_CONNECTION}`).then(() => {
    console.log("Database connected!");
}
).catch((error) => {
    console.log(error.message);
    console.log("Failed to Connect to Database!");
});


app.listen(process.env.PORT, () => {
    console.log(`Server is listening to port ${process.env.PORT}...`)
})