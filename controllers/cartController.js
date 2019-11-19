const db = require("../models");

function trackInventory() {
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
}

// Defining methods for the Cart Controller
module.exports = {
  //===========start of cart functions
  updateCart: function(req, res) {
    db.Cart.findOneAndUpdate(
      { user: req.params.user },
      {
        $inc: {
          items: { product: req.params.item, quantity: 1 }
        }
      }
    )
      .then(() => {
        console.log(`Item id: ${req.params.item} added to cart.`);
      })
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
        console.log(`Item id: ${req.params.item} added to cart.`);
      });
  },
  findUserCart: function(req, res) {
    var itemIDarray = [];
    var itemInfoArray = [];
    db.Cart.find({ user: req.params.user })
      .then(cartFound => {
        if (cartFound) {
          dbModel => {
            for (let i = 0; i < dbModel[0].items.length; i++) {
              itemIDarray.push(dbModel[0].items[i].product);
            }
          };
        } else {
        }
      })
      .then(() => {
        for (let i = 0; i < itemIDarray.length; i++) {
          db.Item.find({ _id: itemIDarray[i] }).then(itemInfo => {
            itemInfoArray.push(itemInfo[0]);
            if (i === itemIDarray.length - 1) {
              res.json(itemInfoArray);
            }
          });
        }
      })
      .catch(err => res.status(422).json(err));
  },
  clearCart: function(req, res) {
    db.Cart.findByIdAndRemove({ user: req.params.id }).then(() => {
      console.log(`Item id: ${req.params.item} deleted`);
    });
  },
  getCart: function(req, res) {
    db.Cart.findOne({ user: req.params.user }).then(() => {
      console.log(`Item id: ${req.params.item} added to cart.`);
    });
  },

  addToCart: function(req, res) {
    db.Cart.findOneAndUpdate(
      { user: req.params.user },
      {
        $push: {
          items: { product: req.params.item, quantity: 1 }
        }
      }
    ).then(() => {
      console.log(`Item id: ${req.params.item} added to cart.`);
    });
  },
  getUserCart: function(req, res) {
    var itemIDarray = [];
    var itemInfoArray = [];
    db.Cart.find({ user: req.params.user })
      .then(dbModel => {
        for (let i = 0; i < dbModel[0].items.length; i++) {
          itemIDarray.push(dbModel[0].items[i].product);
        }
      })
      .then(() => {
        for (let i = 0; i < itemIDarray.length; i++) {
          db.Item.find({ _id: itemIDarray[i] }).then(itemInfo => {
            itemInfoArray.push(itemInfo[0]);
            if (i === itemIDarray.length - 1) {
              res.json(itemInfoArray);
            }
          });
        }
      })
      .catch(err => res.status(422).json(err));
  }
};
