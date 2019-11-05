const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  item: { type: String, required: true },
  brand: { type: String, required: true },
  //need to change price data type into something that represents a dollar amount -- using string as temp
  price: { type: String, required: true },
  category: { type: String, required: false },
  date: { type: Date, default: Date.now },
  description: { type: String, required: false },
  image: { data: Buffer, contentType: String, required: false },
  quantityInStock: { type: Number, required: false }
});

const Item = mongoose.model("Item", inventorySchema);

module.exports = Item;
