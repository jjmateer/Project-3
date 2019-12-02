const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  item: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: String, required: true },
  category: { type: String, required: false },
  date: { type: Date, default: Date.now },
  description: { type: String, required: false },
  image: { type: String, required: false },
  quantityInStock: { type: Number, required: false }
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
