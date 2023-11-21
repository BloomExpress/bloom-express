import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// importing place for routes
import userRoute from "./Routes/userRoute.js";
import bouquetRoute from "./Routes/bouquetRoute.js";
import newsletterRoute from "./Routes/newsletterRoute.js";
import contactRoute from "./Routes/contactRoute.js";
import faqRoute from "./Routes/faqRoute.js";
import cartRoute from "./Routes/cartRoute.js";
import paymentRoute from "./Routes/paymentRoute.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
dotenv.config();

// which client have access
app.use(
  cors({
    credentials: true,
  })
);
app.use(express.static("public"));
app.use(express.json());

// Base Route
app.use("/api/users/", userRoute);
app.use("/api/faqs/", faqRoute);
app.use("/api/bouquets/", bouquetRoute);
app.use("/api/carts/", cartRoute);
app.use("/api/newsletter/", newsletterRoute);
app.use("/api/contacts/", contactRoute);
app.use("/api/payments/", paymentRoute);

// !! Your middleware should not go below this line !!
// Serve frontend client/build folder
app.use(express.static(path.join(__dirname, "client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/dist/index.html"));
});

mongoose
  .connect(`${process.env.DB_CONNECTION}`)
  .then(() => {
    console.log("Database connected! 🌻");
  })
  .catch((error) => {
    console.log(error.message);
    console.log("Failed to Connect to Database!");
  });

app.listen(process.env.PORT, () => {
  console.log(`Server is listening to port ${process.env.PORT}...`);
});
