import mongoose from "mongoose";
const { Schema, model } = mongoose;

const bouquetSchema = new Schema({
  name: String,
  price: Number,
  color: [String],
  description: String,
  image: String,
  category: String, // type: String, enum: [birtday] }
  isAvailable: Boolean,
  isFeatured: Boolean,
  customerReviews: [
    {
      rating: Number, // min / max
      review: String,
    },
  ],
});

const Bouquet = model("bouquet", bouquetSchema);

export default Bouquet;
