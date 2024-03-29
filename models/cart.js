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
        type: Object,
        ref: "Item",
        sparse: true
      },
      quantity: Number,
      price: {
        type: Number,
        ref: "Item"
      }
    }
  ]
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;