import axios from "axios";

export default {
  // Get all inventory
  getInventory: function() {
    return axios.get("http://localhost:3001/api/inventory");
  },
  // Get the item with the given id
  getItem: function(id) {
    return axios.get("http://localhost:3001/api/inventory/" + id);
    s;
  },

  //get items by category
  getItemCategory: function(category) {},
  // Deletes the item with the given id
  deleteItem: function(id) {
    return axios.delete("http://localhost:3001/api/inventory/" + id);
  },
  // Saves a item to the database
  saveItem: function(itemData) {
    return axios.post("http://localhost:3001/api/inventory", itemData);
  },
  register: function(newUser) {
    return axios.post("http://localhost:3001/api/login/r", newUser);
  },
  login: function(userInfo) {
    return axios.post("http://localhost:3001/api/login/l", userInfo);
  },
  user: function(userInfo) {
    return axios.get("http://localhost:3001/api/user", userInfo);
  }
};
