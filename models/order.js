const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user: {
    type: Object,
    ref: "User",
    required: true,
    unique: false
  },
  total: {
    type: Number,
    required: true
  },
  items: [
    {
      item: {
        type: String,
        ref: "Item",
        sparse: true
      },
      image: {
        type: String,
        required: true
      },
      brand: {
        type: String,
        required: true
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
