import axios from "axios";

export default {
  // Get all inventory
<<<<<<< HEAD
  getInventory: function() {
    return axios.get("http://localhost:3001/api/inventory");
  },
  // Get the item with the given id
  getItem: function(id) {
    return axios.get("http://localhost:3001/api/inventory/" + id);
=======
  getInventory: function () {
    return axios.get("/api/inventory");
  },
  // Get the item with the given id
  getItem: function (id) {
    return axios.get("/api/inventory/" + id);
>>>>>>> 7275ea37e0f4858bebf7f6fde82e4f2e2eb20762
  },

  //get items by category
  getItemCategory: function(category) {},
  // Deletes the item with the given id
<<<<<<< HEAD
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
=======
  deleteItem: function (id) {
    return axios.delete("/api/inventory/" + id); 
  },
  // Saves a item to the database
  saveItem: function (itemData) {
    return axios.post("/api/inventory", itemData);
  },
  register: function (newUser) {
    return axios.post("/api/login/r", newUser);

  },
  login: function (userInfo) {
    return axios.post("/api/login/l", userInfo)
  },
  user: function (userInfo) {
    return axios.get("/api/user", userInfo)
>>>>>>> 7275ea37e0f4858bebf7f6fde82e4f2e2eb20762
  }
};
