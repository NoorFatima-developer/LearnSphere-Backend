import mongoose from "mongoose";

// Schema
const cartSchema = new mongoose.Schema({
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Cart = mongoose.model("Cart", cartSchema);
