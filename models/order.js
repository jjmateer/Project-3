const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user: {
    type: String,
    ref: "User",
    required: true,
    unique: false
  },
  items: [
    {
      item: {
        type: String,
        ref: "Item",
        sparse: true
      },
      quantity: Number,
      price: {
        type: Number,
        ref: "Item"
      }
    }
  ],
  cartTotal: {
    type: Number,
    required: false
  }
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
