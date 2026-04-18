import mongoose from "mongoose";

const addProductSchema = new mongoose.Schema(
  {
    productName: { type: String },
    description: { type: String },
    price: { type: Number },
    card_pic: { type: String, default: null },
    images: { type: [String], default: [] },
    category: { type: String },
  },
  {
    timestamps: true, // ✅ gives createdAt + updatedAt automatically
    collection: "addProduct_admin",
  }
);
const addProducts = mongoose.model("addProduct_admin", addProductSchema);

export default addProducts;