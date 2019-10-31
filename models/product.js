const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const inventorySchema = new Schema({
    item: { type: String, required: true },
    brand: { type: String, required: true },
    //need to change price data type into something that represents a dollar amount -- using string as temp
    price: { type: String, required: true },
    date: { type: Date, default: Date.now }
});
const Item = mongoose.model("item", inventorySchema);
module.exports = Item;