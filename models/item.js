const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  product: { type: String, required: true },
  brand: { type: String, required: true },
  //need to change price data type into something that represents a dollar amount -- using string as temp
  price: { type: String, required: true },
  date: { type: Date, default: Date.now },
  description: { type: String, required: true },
  image: { data: Buffer, contentType: String, required: false },
  quantityInStock: { type: Number, required: true }
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;