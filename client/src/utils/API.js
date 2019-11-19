import axios from "axios";

export default {
  //=========INVENTORY========
  // Get all inventory
  getInventory: function() {
    return axios.get("/api/inventory");
  },
  // Get the item with the given id
  getItem: function(id) {
    return axios.get("/api/inventory/" + id);
  },

  //get items by category
  getItemCategory: function(category) {
    return axios.post("/api/inventory", category);
  },
  // Deletes the item with the given id
  deleteItem: function(id) {
    return axios.delete("/api/inventory/" + id);
  },
  // Saves a item to the database
  saveItem: function(itemData) {
    return axios.post("/api/inventory", itemData);
  },
  //=====USER========
  //register a new user
  register: function(newUser) {
    return axios.post("/api/login/r", newUser);
  },
  //login a user
  login: function(userInfo) {
    return axios.post("/api/login/l", userInfo);
  },
  user: function(userInfo) {
    return axios.get("/api/user", userInfo);
  },
  //======CART==============
  //get user cart using the
  addToCart: function(user, item) {
    return axios.post("/api/add-to-cart/" + user + "/" + item);
  },
  getCart: function(user) {
    return axios.get("/api/add-to-cart/" + user);
  },
  emptyCart: function(user, item) {
    return axios.delete("/api/add-to-cart/" + user);
  },
  updateCart: function(user, item) {
    return axios.put("/api/add-to-cart/" + user + "/" + item);
  }
};
