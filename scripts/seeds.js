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
    image: "https://i.imgur.com/kuB6ESa.jpg",
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
    image: "https://i.imgur.com/HBUf7iK.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "Kindle",
    brand: "Aamazon",
    price: "150",
    category: "tablet",
    description: "it's like a book but better",
    image: "https://i.imgur.com/XGXE8Gk.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "Apple Tv",
    brand: "Apple",
    price: "150",
    category: "accessories",
    description: "its like cable but better!",
    image: "https://i.imgur.com/2hulUnY.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "Steve Jobs",
    brand: "Walter Isaacson",
    price: "16",
    category: "book",
    description: "by the time this book is published it will be obsolete...",
    image: "https://i.imgur.com/8k4XbwT.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "Philips SHQ1200/28 ActionFit Sports In-Ear Headphones",
    brand: "Philips",
    price: "120",
    category: "accessories",
    description:
      "Philips 27 inch Full HD 1ms LED Monitor, 1920 x 1080 resolution, 10M:1 contrast, 1ms response, VGA/HDMI, Tilt Adjustment",
    image: "https://images-na.ssl-images-amazon.com/images/I/516zGuCoi9L._AC_SL1219_.jpg",
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
    image: "https://i.imgur.com/wouE9WP.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "Nighthawk AC1900 Dual Band WiFi Gigabit Router (R7000)",
    brand: "NETGEAR",
    price: "110",
    category: "router",
    description: "802.11ac Dual Band Gigabit Router",
    image: "https://i.imgur.com/rSMaK5c.jpg",
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
    image: "https://i.imgur.com/P52ATV0.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "EX7300-100NAR Nighthawk AC2200 Plug-In WiFi Range Extender",
    brand: "Amazon",
    price: "49",
    category: "accessories",
    description:
      "8 inches HD display; 16 or 32 GB of internal storage (up to 400 GB with microSD)",
    image: "https://images-na.ssl-images-amazon.com/images/I/61A27l5J4uL._AC_SL1000_.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "USB C HUB,Jams Donkey USB-C Docking Station 10-1",
    brand: "Jams Donkey ",
    price: "41",
    category: "accessories",
    description:
      "Triple Display USB Type C Adaptor With HDMI,VGA,4 USB 3.0 Ports,SD TF Card Reader,Compatible For MacBook",
    image: "https://images-na.ssl-images-amazon.com/images/I/61rjcq%2BEu0L._AC_SL1000_.jpg://images-na.ssl-images-amazon.com/images/I/61A27l5J4uL._AC_SL1000_.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "Wsky Laptop Cooler, Ultra Slim ",
    brand: "WSKY",
    price: "20",
    category: "accessories",
    description:
      "【Super Cooling & Quiet】Laptop cooler with 5 quite fans(the four outer fans and then the large center Super strong wind fan). Create a noise-free & interference-free environment for you. The fans rapid cooling effect prevents your laptop from overheating and is perfect for gaming.",
    image: "https://images-na.ssl-images-amazon.com/images/I/81IBhIqRRjL._AC_SL1500_.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "Pccooler Laptop Cooling Pad, Laptop Cooler ",
    brand: "Pccooler",
    price: "15",
    category: "accessories",
    description:
      "【Stainless Steel Honeycomb Mesh Design】PCCOOLER laptop cooling pad with 2.5mm metal mesh surface to provide excellent airflow, and improve heat dissipation.",
    image: "https://images-na.ssl-images-amazon.com/images/I/61r69GfzceL._AC_SL1001_.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "TP-Link AC1750 Smart WiFi Router ",
    brand: "Archer 27",
    price: "57",
    category: "router",
    description:
      "Wireless internet router works with Alexa, compatible with all Wi Fi devices, 802. 11AC and older",
    image: "https://images-na.ssl-images-amazon.com/images/I/61uTV%2BEdeyL._AC_SL1500_.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "MyQ Smart Garage Door Opener Chamberlain MYQ-G0301",
    brand: "Chamberlain",
    price: "30",
    category: "accessories",
    description:
      "Wireless & Wi-Fi enabled Garage Hub with Smartphone Control",
    image: "https://images-na.ssl-images-amazon.com/images/I/61yZGUumjdL._AC_SL1000_.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "Razer DeathAdder Elite Gaming Mouse: 16,000 DPI Optical Sensor",
    brand: "Razer",
    price: "30",
    category: "accessories",
    description:
      "High Precision 16,000 DPI Optical Sensor: Offers on the fly sensitivity adjustment through dedicated DPI buttons (reprogrammable) for gaming and creative work",
    image: "https://images-na.ssl-images-amazon.com/images/I/714O2t-MesL._AC_SL1500_.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "D850",
    brand: "Nikon",
    price: "2800",
    category: "camera",
    description: "most badass camera ever... ",
    image: "https://i.imgur.com/Hccv4f7.jpg",
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