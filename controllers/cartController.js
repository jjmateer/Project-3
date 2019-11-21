const db = require("../models");

// Defining methods for the Cart Controller
module.exports = {
  trackInventory: function trackInventory() {
    db.Cart.findOneAndUpdate(
      { user: req.params.user },
      {
        $inc: {
          items: { product: req.params.item, quantity: 1 }
        }
      }
    ).then(
      db.Item.findOneAndUpdate(
        { user: req.params.user },
        {
          $inc: {
            items: { product: req.params.item, quantity: -1 }
          }
        }
      )
    );
  },

  //start of cart functions
  clearCart: function (req, res) {
    db.Cart.findByIdAndRemove({ user: req.params.id }).then(() => {
      console.log(`Item id: ${req.params.item} deleted`);
    });
  },
  getUserCart: function (req, res) {
    var itemIDarray = [];
    var itemInfoArray = [];
    db.Cart.find({ user: req.params.user })
      .then(dbModel => {
        for (let i = 0; i < dbModel[0].items.length; i++) {
          itemIDarray.push(dbModel[0].items[i].product)
        }
      })
      .then(() => {
        for (let i = 0; i < itemIDarray.length; i++) {
          db.Item.find({ _id: itemIDarray[i] })
            .then(itemInfo => {
              itemInfoArray.push(itemInfo[0])
              if (i === itemIDarray.length - 1) {
                console.log(itemInfoArray)
                res.json(itemInfoArray)
              }
            })
        }
      })
      .catch(err => res.status(422).json(err));
  },
  addToCart: function (req, res) {
    var inCart = false;
    db.Cart.findOne({ user: req.params.user }, { items: { $elemMatch: { product: req.params.item } } })
      .then(item => {
        for (let i = 0; i < item.items.length; i++) {
          if (item.items[i].product === req.params.item) {
            console.log(`updating quantity...`)
            inCart = true;
            db.Cart.updateOne(
              { user: req.params.user, "items.product": req.params.item },
              { $inc: { "items.$.quantity": 1 } }
            )
              .then(
                db.Item.findOneAndUpdate(
                  { user: req.params.user },
                  {
                    $inc: {
                      items: { product: req.params.item, quantity: -1 }
                    }
                  }
                )
              )
              .then(() => {
                return res.status(200).json({ msg: "Item added to cart." })
                console.log(`Updated Quantity: ${item.items[i].quantity}`)
              })
            break;
          }
        }
      }).then(() => {
        if (inCart === false) {
          db.Cart.findOneAndUpdate(
            { user: req.params.user },
            {
              $push: {
                items: { product: req.params.item, quantity: 1 }
              }
            }
          ).then(() => {
            return res.status(200).json({ msg: "Item added to cart." })
            console.log(`Item id: ${req.params.item} added to cart.`)
          })
        }
      })
  },
  getUserCart: function (req, res) {
    var itemIDarray = [];
    var itemInfoArray = [];
    db.Cart.find({ user: req.params.user })
      .then(dbModel => {
        for (let i = 0; i < dbModel[0].items.length; i++) {
          itemIDarray.push(dbModel[0].items[i].product)
        }
      })
      .then(() => {
        for (let i = 0; i < itemIDarray.length; i++) {
          db.Item.find({ _id: itemIDarray[i] })
            .then(itemInfo => {
              itemInfoArray.push(itemInfo[0])
              if (i === itemIDarray.length - 1) {
                res.json(itemInfoArray)
              }
            })
        }
      })
      .catch(err => res.status(422).json(err));
  }
};
