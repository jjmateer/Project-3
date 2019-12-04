const db = require("../models");

module.exports = {
  checkout: function (req, res) {
    var order = new Object()
    order.total = 0;
    order.items = [];
    order.user = req.params.user;
    db.Cart.findOne({ user: req.params.user })
      .then(data => {
        for (let i = 0; i < data.items.length; i++) {
          order.total += parseInt(data.items[i].product[0].price);
          order.items.push({
            id: data.items[i].product[0]._id,
            item: data.items[i].product[0].item,
            price: data.items[i].product[0].price,
            quantity: data.items[i].quantity
          });
          db.Item.findOneAndUpdate(
            { _id: data.items[i].product[0]._id },
            { $inc: { quantityInStock: -Math.abs(data.items[i].quantity) } }
          ).then((currentItem) => {
            console.log(`${currentItem.item} now has ${currentItem.quantityInStock} left in stock.`)
          })
        }
        db.User.findOne({ _id: req.params.user }).then(user => { order.user = user })
      })
      .then(() => {
        console.log(order.items)
        db.Order.create(order).then((userorder) => { res.status(200).json(userorder) })
        db.Cart.findOneAndUpdate({ user: req.params.user }, { $pull: { items: { $exists: true } } }).then(user => { console.log(user) })
      })
      .catch(err => res.status(400).json({ msg: `Checkout failed, error: ${err}` }));
  },
  getUserCart: function (req, res) {
    var cartArray = [];
    db.Cart.find({ user: req.params.user })
      .then(data => {
        for (let i = 0; i < data[0].items.length; i++) {
          cartArray.push({ item: data[0].items[i].product[0], quantity: data[0].items[i].quantity })
        }
      }).then(() => { res.status(200).json(cartArray) })
      .catch(err => res.status(422).json(err));
  },
  addToCart: function (req, res) {
    const itemQuantity = parseInt(req.params.quantity)
    var inCart = false;
    db.Cart.findOne(
      { user: req.params.user })
      .then(data => {
        for (let i = 0; i < data.items.length; i++) {
          if (data.items[i].product[0] === req.params.item) {
            inCart = true;
            db.Cart.updateOne(
              { user: req.params.user, "items.product": req.params.item },
              { $inc: { "items.$.quantity": itemQuantity } }
            )
              .then(() => {
                res.status(200).json({ msg: "Quantity in cart updated." })
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
                  items: { product: itemdata, quantity: itemQuantity }
                }
              }
            ).then(() => {
              res.status(200).json({ msg: "Item added to cart." })
            })
          })
        }
      });
  }
};