const mongoose = require("mongoose");
const Item = require("../models/item");

mongoose.connect("mongodb://localhost/storefrontdb", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function callback() {
  console.log("Connected to MongoDB.");
});
// This file empties the Item collection and inserts the items below

const itemSeeds = [
  {
    item: "Mac Book",
    brand: "Apple",
    price: "1099",
    category: "laptop",
    description: "Pretty cool, if you like Apple...",
    image: "https://i.imgur.com/qIVwgvQ.jpg",
    quantityInStock: 100,
    date: new Date(Date.now())
  },
  {
    item: "ThinkPad",
    brand: "Lenovo",
    price: "999",
    category: "laptop",
    description: "the ultimate computing machine..",
    image: "https://i.imgur.com/6mFoHuu.jpg",
    quantityInStock: 100,
    date: new Date(Date.now())
  },
  {
    item: "iPad",
    brand: "Apple",
    price: "499",
    category: "tablet",
    description: "Pretty cool, if you like Apple...",
    image: "https://i.imgur.com/1v35cu1.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "Surface Pro",
    brand: "Microsoft",
    price: "1499",
    category: "tablet",
    description: "like an iPad, but costs more",
    image: "https://i.imgur.com/YKAe4WZ.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "Pixel 4",
    brand: "Google",
    price: "899",
    category: "phone",
    description: "like an iPhone but costs less",
    image: "https://i.imgur.com/wpnC1fK.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "iPhone 11",
    brand: "Apple",
    price: "1399",
    category: "phone",
    description: "the gold standard in smart phones...",
    image: "https://i.imgur.com/FXm7cdK.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "Code: The Hidden Language of Computer Hardware and Software",
    brand: "Charles Petzold",
    price: "23",
    category: "book",
    description:
      "Using everyday objects and familiar language systems such as Braille and Morse code, author Charles Petzold weaves an illuminating narrative for anyone who’s ever wondered about the secret inner life of computers and other smart machines.",
    image: "https://i.imgur.com/FXm7cdK.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "The Everything Store: Jeff Bezos and the Age of Amazon",
    brand: "Brad Stone",
    price: "7",
    category: "book",
    description:
      "thrilling fantasy novel of a man trying to take over the world",
    image: "",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "Kindle",
    brand: "Aamazon",
    price: "150",
    category: "tablet",
    description: "it's like a book but better",
    image: "",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "Apple Tv",
    brand: "Apple",
    price: "150",
    category: "accessories",
    description: "its like cable but better!",
    image: "",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "Steve Jobs",
    brand: "Walter Isaacson",
    price: "16",
    category: "book",
    description: "by the time this book is published it will be obsolete...",
    image: "",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "27 Full HD 1ms Monitor",
    brand: "Phillips",
    price: "120",
    category: "accessories",
    description:
      "Philips 27 inch Full HD 1ms LED Monitor, 1920 x 1080 resolution, 10M:1 contrast, 1ms response, VGA/HDMI, Tilt Adjustment",
    image: "accessories",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "Magsafe 2 Laptop Charger",
    brand: "Level Black",
    price: "17",
    category: "accessories",
    description:
      "Input: 100-240V~1.5A @ 50Hz-60Hz & Output: 20V 4.25A max --Upgraded design with 2 additional USB ports --LED indicator light changes from amber to green when fully charged --Powers Li-Ion & Li-Poly batteries while off on or in sleep mode --Powers system without operating battery",
    image: "",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "Nighthawk AC1900 Dual Band WiFi Gigabit Router (R7000)",
    brand: "NETGEAR",
    price: "110",
    category: "accessories",
    description: "802.11ac Dual Band Gigabit Router",
    image: "",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "EX7300-100NAR Nighthawk AC2200 Plug-In WiFi Range Extender",
    brand: "NETGEAR",
    price: "65",
    category: "accessories",
    description:
      "The Nighthawk X4 Wi-Fi range extender boosts your existing Wi-Fi range with speeds up to 2200 Mbps",
    image: "",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "D850",
    brand: "Nikon",
    price: "2800",
    category: "camera",
    description: "most badass camera ever... ",
    image: "",
    quantityInStock: 200,
    date: new Date(Date.now())
  }
];

Item.deleteMany({})
  .then(() => Item.insertMany(itemSeeds))
  .then(data => {
    console.log(`${data.length} records inserted.`);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
