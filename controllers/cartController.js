const db = require("../models");

// Defining methods for the Cart Controller
module.exports = {
  //   checkout: function trackInventory(req, res) {
  //     //function to add cart total -- will add all items * quantity then get the sum
  //     const cartSum = arr => arr.reduce((a,b) => a + b, 0)
  //     //cart total will store item.price * item.quantity
  //     var cartTotal = []
  //     //order will be pushed to orders collection after filled with info in loop below
  //     var order = new Object()
  //     order.items = []
  //     order.user = ""
  //     order.total = 0
  //     //find users cart
  //     db.Cart.findOne({ user: req.params.user })
  //       .then(item => {
  //         //set order object property -- user
  //         order.user = this.user;
  //         //loop through the cart to pull out quantities and prices of items in the cart so we can use those to update inventory and get a total cart price
  //         for (let i = 0; i < item.items.length; i++) {
  //           var itemPrice = item.items[i].price
  //           var itemTotal = (item.items[i].quantity * itemPrice)
  //           //push item.price * quantity to an array so it can be added for a total
  //           cartTotal.push(itemTotal)
  //           //shouldnt have used item so many times --
  //           //first "item" is the callback from find cart
  //           //2nd "items[i]" is the items array or the cart model
  //           //3rd item is each actual item in the cart
  //           var orderItem = item.items[i].item
  //           //push orderItem above into the new order object used to generate a new order document later
  //           order.items.push(orderItem)
  //           //set the new object price total(used to make order document) to cart total
  //           order.total = cartTotal
  // //get the inverse of the total quantity of each item in the cart
  //           var removeInventory = (item.items[i].quantity *= -1);
  //           //find the item in inventory and increment it with the inverse of the cart quantity from above
  //           if (item.items[i].product === req.params.item) {
  //             console.log(`updating quantity...`);
  //             db.Item.findOneAndUpdate(
  //               { item: item.items[i].product},
  //               { $inc: { "items.$.quantity": removeInventory } }
  //             ).then(() => {
  //               console.log(`${removeInventory} ${item.items[i].product}'s removed from Inventory`)
  //               console.log(`Ordered Quantity : ${item.items[i].quantity}`);
  //             });
  //             break;
  //           }
  //         }
  //       })
  //       .then(item => {
  //             db.Cart.update(
  //               { user: req.params.user},
  //               { $unset: {product: "", quantity: ""} }
  //             ).then(() => {
  //               console.log(`Updated Quantity: ${item.items[i].quantity}`);
  //             });
  //             break;
  //           }
  //       ).then( () => {
  //                   //set the new object price total(used to make order document) to cart total
  //              order.total = cartSum(cartTotal)
  //           db.Order.insertOne(order)
  //       }
  //       ).then(() => {
  //         return res.status(200).json({ msg: "Order Added" });
  //         console.log(`Order added: ${order}`);
  //       });
  //   },

  // start of cart functions
  // clearCart: function(req, res) {
  checkout: function(req, res) {
    // console.log(req.body)
    const cartSum = arr => arr.reduce((a, b) => a + b, 0);
    //cart total will store item.price * item.quantity
    var cartTotal = [];
    var order = new Object();
    order.items = [];
    order.user = req.params.user;
    order.cartTotal = 0;
    db.Cart.findOne({ user: req.params.user })
      .then(item => {
        for (let i = 0; i < item.items.length - 1; i++) {
          db.Item.find({ _id: item.items[i].product }).then(item => {
            var itemPrice = parseInt(item[i].price);
            var itemQuantity = parseInt(item[i].quantity);
            var itemTotal = itemQuantity * itemPrice;
            cartTotal.push(itemTotal);

            order.items.push(item[i]);
            var removeInventory = (item[i].quantity *= -1);

            console.log(
              `before item find one and update:${item[i].item}  ${item[0].quantityInStock}`
            );
            db.Item.findOneAndUpdate(
              { _id: item[0]._id },
              { $inc: { quantityInStock: removeInventory } }
            );
            // .then(tempItem => {
            //   // db.Cart.findOne({ user: req.params.user })
            //   db.Cart.findOneAndUpdate(
            //     { user: req.params.user },
            //     { $set: { items: null } }
            //   );
            //   console.log(`tempCartUser:  ${tempItem.user}`);
            //   console.log(`tempItem:  ${tempItem.items}`);
            //   console.log(`item find one and update:  ${item[0].item}`);
            //   console.log(
            //     `after item find one and update:  ${item[0].quantityInStock}`
            //   );
            //   // console.log(order.items)
            //   // console.log(`updating quantity...`);
            // });
            // .then(() => {
            // console.log(`${removeInventory} ${item.items[i].product}'s removed from Inventory`)
            // console.log(`Ordered Quantity : ${item.items[i].quantity}`);
            // });
            // }
          });
        }
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
        // order.total = cartSum(cartTotal);
        db.Order.create({
          user: order.user,
          items: order.items,
          cartTotal: `${cartSum(cartTotal)}`
        }).then(order => {
          console.log("order:  ", order);
          return res.status(200).json([]);
        });
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
              // console.log(itemInfoArray)
              res.json(itemInfoArray);
            }
          });
        }
      })
      .catch(err => res.status(422).json(err));
  },
  addToCart: function(req, res) {
    var inCart = false;
    db.Cart.findOne(
      { user: req.params.user },
      { items: { $elemMatch: { product: req.params.item } } }
    )
      .then(item => {
        for (let i = 0; i < item.items.length; i++) {
          if (item.items[i].product === req.params.item) {
            console.log("item:  ", item.items);
            console.log(`updating quantity...`);
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
                      items: { product: req.params.item, quantity: 1 }
                    }
                  }
                )
              )
              .then(() => {
                return res.status(200).json({ msg: "Item added to cart." });
              });
          }
        }
      })
      .then(() => {
        if (inCart === false) {
          db.Cart.findOneAndUpdate(
            { user: req.params.user },
            {
              $push: {
                items: { product: req.params.item, quantity: 1 }
              }
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
