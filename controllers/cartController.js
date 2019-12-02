const db = require("../models");

module.exports = {
  checkout: function (req, res) {
    var order = new Object()
    order.total = 0;
    order.items = [];
    order.user = {};
    db.User.findOne({ _id: req.params.user }).then(user => { order.user = user })
    db.Cart.findOne({ user: req.params.user })
      .then(item => {
        for (i = 0; i < item.items.length; i++) {
          order.total += parseInt(item.items[i].product[0].price);
          item.items.forEach(element => order.items.push(element.product[0]));
        }
      })
      .then(() => {
        db.Order.create(order);
        db.Cart.findOneAndUpdate({ user: req.params.user }, { $pull: { items: { $exists: true } } })
          .catch(err => res.status(422).json(err));
      })
  },
  clearCart: function (req, res) {
    console.log(req.params.user)
    db.Cart.findByIdAndRemove({ user: req.params.id }).then(() => {
      console.log(`Item id: ${req.params.item} deleted`);
    });
    db.Cart.findOneAndUpdate({ user: req.params.user }, { $pull: { items: { $exists: true } } })
      .catch(err => res.status(422).json(err));
  },
  getUserCart: function (req, res) {
    var cartArray = [];
    db.Cart.find({ user: req.params.user })
      .then(data => {
        for (let i = 0; i < data[0].items.length; i++) {
          cartArray.push(data[0].items[i].product[0])
          if (cartArray.length === data[0].items.length) {
            res.json(cartArray)
          }
        }
      })
      .catch(err => res.status(422).json(err));
  },
  addToCart: function (req, res) {
    var inCart = false;
    db.Cart.findOne(
      { user: req.params.user })
      .then(item => {
        for (let i = 0; i < item.items.length; i++) {
          if (item.items[i].product === req.params.item) {
            console.log(`updating quantity...`);
            inCart = true;
            db.Cart.updateOne(
              { user: req.params.user, "items.product": req.params.item },
              { $inc: { "items.$.quantity": 1 } }
            )
              .then((item2) => {
                console.log(item2.product)
                return res.status(200).json({ msg: "Item added to cart." })
              })
          }
        }
      })
      .then(() => {
        if (inCart === false) {
          db.Item.find(
            { _id: req.params.item }
          ).then((itemdata) => {
            db.Cart.findOneAndUpdate(
              { user: req.params.user },
              {
                $push: {
                  items: { product: itemdata, quantity: 1 }
                }
              }
            ).then(() => {
              return res.status(200).json({ msg: "Item added to cart." })
            })
          })
        }
      });
  }
};