const db = require("../models");

module.exports = {
  checkout: function (req, res) {
    // console.log(req.body)
    // var cartTotal = []
    var order = new Object()
    order.items = []
    order.user = ""
    // order.cartTotal = 0
    db.Cart.findOne({ user: req.params.user })
      .then(item => {
        // order.user = req.params.user;
        // for (let i = 0; i < item.items.length - 1; i++) {
        //   console.log(item.items[i])
        //   db.Item.find({ _id: item.items[i] }).then(item => {
            // console.log(item[0])
            // var itemPrice = item[i].price
            // var itemTotal = parseInt(item[i].quantity * itemPrice)
            // cartTotal.push(itemTotal)
            // var item = item[i]
            // order.items.push(item[0])
            // order.cartTotal = cartTotal.reduce((a, b) => a + b, 0)
            // console.log(`item total: ${itemTotal}`)
            // var removeInventory = (item[i].quantity *= 1);
            // if (item.id === req.params.item) {
            // db.Item.findOneAndUpdate(
            //   { _id: item[0]._id },
            //   { $inc: { quantityInStock: -1 } }
            // )
            // .then(() => {
            // db.Cart.findOne({ user: req.params.user })
            // console.log(order.items)
            // console.log(`updating quantity...`);
            // })
            // .then(() => {
            // console.log(`${removeInventory} ${item.items[i].product}'s removed from Inventory`)
            // console.log(`Ordered Quantity : ${item.items[i].quantity}`);
            // });
            // }
          // })
        // }
      })
      .then(() => {
        db.Cart.findOneAndUpdate({ user: req.params.user }, { $pull: { items: { $exists: true } } })
          .catch(err => res.status(422).json(err));
      })
  },
  clearCart: function (req, res) {
    console.log(req.params.user)
    db.Cart.findByIdAndRemove({ user: req.params.id }).then(() => {
      console.log(`Item id: ${req.params.item} deleted`);
    });
  },
  getUserCart: function (req, res) {
    var cartArray = [];
    db.Cart.find({ user: req.params.user })
      .then(data => {
        for(let i = 0;i < data[0].items.length;i++){
          cartArray.push(data[0].items[i].product[0])
          if(i === data[0].items.length - 1) {
            res.json(cartArray)
          }
        }
      })
      .catch(err => res.status(422).json(err));
  },
  addToCart: function (req, res) {
    var inCart = false;
    db.Cart.findOne(
      { user: req.params.user },
      { items: { $elemMatch: { product: req.params.item } } }
    )
      .then(item => {
        console.log(item)
        for (let i = 0; i < item.items.length; i++) {
          if (item.items[i].product || item.items[i].product === req.params.item) {
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
  },
  // getUserCart: function (req, res) {
  //   var itemIDarray = [];
  //   var itemInfoArray = [];
  //   db.Cart.find({ user: req.params.user })
  //     .then(dbModel => {
  //       for (let i = 0; i < dbModel[0].items.length; i++) {
  //         itemIDarray.push(dbModel[0].items[i].product);
  //       }
  //     })
  //     .then(() => {
  //       for (let i = 0; i < itemIDarray.length; i++) {
  //         db.Item.find({ _id: itemIDarray[i] }).then(itemInfo => {
  //           itemInfoArray.push(itemInfo[0]);
  //           if (i === itemIDarray.length - 1) {
  //             res.json(itemInfoArray);
  //           }
  //         });
  //       }
  //     })
  //     .catch(err => res.status(422).json(err));
  // }
};