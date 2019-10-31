import axios from "axios";

export default {
  // Get all inventory
  getInventory: function() {
    return axios.get("/api/inventory");
  },
  // Get the item with the given id
  getItem: function(id) {
    return axios.get("/api/inventory/" + id);
  },
  // Deletes the item with the given id
  deleteItem: function(id) {
    return axios.delete("/api/inventory/" + id);
  },
  // Saves a item to the database
  saveItem: function(itemData) {
    return axios.post("/api/inventory", itemData);
  }
};
