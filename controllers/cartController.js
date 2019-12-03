const db = require("../models");

module.exports = {
<<<<<<< HEAD
  // start of cart functions
  checkout: function(req, res) {
    const cartSum = arr => arr.reduce((a, b) => a + b, 0);
    //cart total will store item.price * item.quantity
    var cartTotal = [];
    var order = new Object();
    order.items = [];
    order.user = req.params.user;
    order.cartTotal = 0;

    function getCartInfo(item) {
      var itemPrice = parseInt(item.price);
      var itemQuantity = parseInt(item.quantity);
      var itemTotal = itemQuantity * itemPrice;
      cartTotal.push(itemTotal);
      order.items.push(item);
      var removeInventory = (item[i].quantity *= -1);
      db.Item.findOneAndUpdate(
        { _id: item[0]._id },
        { $inc: { quantityInStock: removeInventory } }
      );
    }

    db.Cart.findOne({ user: req.params.user })
      .then(result => {
        return result.items.forEach(() => {
          db.Item.find({ _id: result.items[i].product }).then(item => {
            return getCartInfo(item);
          });
        });
      })
      .then(() => {
        db.Cart.findOneAndUpdate(
          { user: req.params.user },
          { $pull: { items: { $exists: true } } }
        ).then(data => {
          console.log(data);
        });
        return res.status(200).json([]);
      })
      .then(() => {
        db.Cart.findOneAndUpdate(
          { user: req.params.user },
          { $pull: { items: { $exists: true } } }
        ).then(data => {
          console.log("clear cart:  ", data);
        });
      })
      .then(() => {
        db.Order.create(order);
        console.log(order);
      })
      .catch(err => res.status(422).json(err));
  },
  //start of cart functions
  clearCart: function(req, res) {
    console.log(req.params.user);
    db.Cart.findByIdAndRemove({ user: req.params.id }).then(() => {
      console.log(`Item id: ${req.params.item} deleted`);
    });
  },
  getUserCart: function(req, res) {
    var itemIDarray = [];
    var itemInfoArray = [];
=======
  checkout: function (req, res) {
    var order = new Object()
    order.total = 0;
    order.items = [];
    order.user = req.params.user;
    db.Cart.findOne({ user: req.params.user })
      .then(data => {
        for (i = 0; i < data.items.length; i++) {
          order.total += parseInt(data.items[i].product[0].price);
          order.items.push(data.items[i].product[0]);
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
        db.Order.create(order).then((userorder) => { res.status(200).json(userorder) })
        db.Cart.findOneAndUpdate({ user: req.params.user }, { $pull: { items: { $exists: true } } }).then(user => { console.log(user) })
      })
      .catch(err => res.status(400).json({ msg: `Checkout failed, error: ${err}` }));
  },
  getUserCart: function (req, res) {
    var cartArray = [];
>>>>>>> 96dfe0b099cf60cbf311a95e5be28ab3169b6a01
    db.Cart.find({ user: req.params.user })
      .then(data => {
        for (let i = 0; i < data[0].items.length; i++) {
          cartArray.push(data[0].items[i].product[0])
        }
<<<<<<< HEAD
      })
      .then(() => {
        for (let i = 0; i < itemIDarray.length; i++) {
          db.Item.find({ _id: itemIDarray[i] }).then(itemInfo => {
            itemInfoArray.push(itemInfo[0]);
          });
        }
      })
      .then(() => {
        res.json(itemInfoArray);
      })
      .catch(err => res.status(422).json(err));
  },
  addToCart: function(req, res) {
=======
      }).then(()=> {res.status(200).json(cartArray)})
      .catch(err => res.status(422).json(err));
  },
  addToCart: function (req, res) {
    const itemQuantity = parseInt(req.params.quantity)
>>>>>>> 96dfe0b099cf60cbf311a95e5be28ab3169b6a01
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
<<<<<<< HEAD
                return res.status(200).json({ msg: "Item added to cart." });
              });
=======
                res.status(200).json({ msg: "Quantity in cart updated." })
              })
>>>>>>> 96dfe0b099cf60cbf311a95e5be28ab3169b6a01
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
<<<<<<< HEAD
            }
          ).then(() => {
            return res.status(200).json({ msg: "Item added to cart." });
          });
        }
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

// checkout: function trackInventory(req, res) {
//   //function to add cart total -- will add all items * quantity then get the sum
//   const cartSum = arr => arr.reduce((a,b) => a + b, 0)
//   //cart total will store item.price * item.quantity
//   var cartTotal = []
//   //order will be pushed to orders collection after filled with info in loop below
//   var order = new Object()
//   order.items = []
//   order.user = ""
//   order.total = 0
//   //find users cart
//   db.Cart.findOne({ user: req.params.user })
//     .then(item => {
//       //set order object property -- user
//       order.user = this.user;
//       //loop through the cart to pull out quantities and prices of items in the cart so we can use those to update inventory and get a total cart price
//       for (let i = 0; i < item.items.length; i++) {
//         var itemPrice = item.items[i].price
//         var itemTotal = (item.items[i].quantity * itemPrice)
//         //push item.price * quantity to an array so it can be added for a total
//         cartTotal.push(itemTotal)
//         //shouldnt have used item so many times --
//         //first "item" is the callback from find cart
//         //2nd "items[i]" is the items array or the cart model
//         //3rd item is each actual item in the cart
//         var orderItem = item.items[i].item
//         //push orderItem above into the new order object used to generate a new order document later
//         order.items.push(orderItem)
//         //set the new object price total(used to make order document) to cart total
//         order.total = cartTotal
// //get the inverse of the total quantity of each item in the cart
//         var removeInventory = (item.items[i].quantity *= -1);
//         //find the item in inventory and increment it with the inverse of the cart quantity from above
//         if (item.items[i].product === req.params.item) {
//           console.log(`updating quantity...`);
//           db.Item.findOneAndUpdate(
//             { item: item.items[i].product},
//             { $inc: { "items.$.quantity": removeInventory } }
//           ).then(() => {
//             console.log(`${removeInventory} ${item.items[i].product}'s removed from Inventory`)
//             console.log(`Ordered Quantity : ${item.items[i].quantity}`);
//           });
//           break;
//         }
//       }
//     })
//     .then(item => {
//           db.Cart.update(
//             { user: req.params.user},
//             { $unset: {product: "", quantity: ""} }
//           ).then(() => {
//             console.log(`Updated Quantity: ${item.items[i].quantity}`);
//           });
//           break;
//         }
//     ).then( () => {
//                 //set the new object price total(used to make order document) to cart total
//            order.total = cartSum(cartTotal)
//         db.Order.insertOne(order)
//     }
//     ).then(() => {
//       return res.status(200).json({ msg: "Order Added" });
//       console.log(`Order added: ${order}`);
//     });
// },
=======
            ).then(() => {
              res.status(200).json({ msg: "Item added to cart." })
            })
          })
        }
      });
  }
};
>>>>>>> 96dfe0b099cf60cbf311a95e5be28ab3169b6a01
