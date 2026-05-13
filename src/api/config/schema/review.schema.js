import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    productId: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String },
    insert_date_time: { type: Date, default: Date.now },
    userDetail: {
      type: Object, // optional (name, profile pic, etc.)
    },
    productDetail: {
      type: Object, // optional (product name, image, etc.)
    }
  },
  {
    collection: "reviews",
  }
);

const reviews = mongoose.model("reviews", reviewSchema);

export default reviews;