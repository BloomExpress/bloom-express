import { Schema, model } from "mongoose";

const newsLetterSchema = new Schema(
  {
    bouquetOfTheMonth: String,
    exclusiveDiscount: String,
    floralTips: String,
  },
  { timestamps: true }
);

const NewsLetter = model("newsletter", newsLetterSchema);

export default NewsLetter;
