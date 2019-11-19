const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  user: {
    type: String,
    ref: "User",
    required: true
  },
  items: [
    {
      product: {
        type: String,
        ref: "Product",
        unique: true
      },
      quantity: Number
    }
  ]
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
