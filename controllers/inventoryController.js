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
    db.Item.find({ category: req.params.category })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByName: function (req, res) {
    db.Item.find({ item: req.params.name })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Item.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Item.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Item.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addToCart: function (req, res) {
    db.Cart.findOneAndUpdate(
      { user: req.params.user },
      {
        $push: {
          items: { product: req.params.item, quantity: 1 }
        }
      }
    )
  },
  getUserCart: function (req, res) {
    var itemIDarray = [];
    var itemInfoArray = [];
    db.Cart.find({ user: req.params.user })
      .then(dbModel => {
        for (let i = 0; i < dbModel[0].items.length; i++) {
          itemIDarray.push(dbModel[0].items[i].product)
        }
      }).then(() => {
        for (let i = 0; i < itemIDarray.length; i++) {
          db.Item.find({ _id: itemIDarray[i] })
            .then(itemInfo => {
              console.log(itemInfo)
              itemInfoArray.push(itemInfo);
            })
        }
      }).then(() => {
        console.log(itemInfoArray)
        res.json(itemInfoArray)
      })
      .catch(err => res.status(422).json(err));
  }
};
