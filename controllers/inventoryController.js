const db = require("../models");

// Defining methods for the Item Controller
module.exports = {
  findAll: function (req, res) {
    db.Item.find({})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Item.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByCategory: function (req, res) {
    if (req.params.category !== "all") {
      db.Item.find({ category: req.params.category })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    } else {
      db.Item.find({})
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  },
  findByName: function (req, res) {
    if (req.params.name) {
      db.Item.find({ item: req.params.name })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  },
  view: function (req, res) {
    db.Item.find({ _id: req.params.item })
      .then(itemData => res.status(200).json(itemData))
      .catch(err => res.status(422).json(err));
  },
  getOrders: function (req, res) {
    db.Order.find({ user: req.params.user })
      .then(orderData => res.status(200).json(orderData))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Item.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
