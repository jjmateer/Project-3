const mongoose = require("mongoose");
const Item = require("../models/item");

mongoose.connect("mongodb+srv://jjmateer:manila22@cluster0-q0kab.mongodb.net/storefrontdb?retryWrites=true&w=majority", {
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
    description: "The ultimate computing machine..",
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
    description: "Like an iPad, but costs more",
    image: "https://i.imgur.com/YKAe4WZ.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "Pixel 4",
    brand: "Google",
    price: "899",
    category: "phone",
    description: "Like an iPhone but costs less",
    image: "https://i.imgur.com/wpnC1fK.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "iPhone 11",
    brand: "Apple",
    price: "1399",
    category: "phone",
    description: "The gold standard in smart phones...",
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
      "Thrilling fantasy novel of a man trying to take over the world",
    image: "https://i.imgur.com/HBUf7iK.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "Kindle",
    brand: "Aamazon",
    price: "150",
    category: "tablet",
    description: "It's like a book but better",
    image: "https://i.imgur.com/XGXE8Gk.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "Apple Tv",
    brand: "Apple",
    price: "150",
    category: "accessories",
    description: "Its like cable but better!",
    image: "https://i.imgur.com/2hulUnY.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "Steve Jobs",
    brand: "Walter Isaacson",
    price: "16",
    category: "book",
    description: "By the time this book is published it will be obsolete...",
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
    item: "Cyber Acoustics Bluetooth Speakers",
    brand: "Cyber Acoustics",
    price: "60",
    category: "speaker",
    description:
      "COLORFUL ROOM FILLING SOUND: Match the color of your gear, your room, or your mood with this powerful and dynamic 2.1 sound system. Color selectable LED drivers deliver your music with flair. Choose green, blue, red, purple, yellow, light blue, white, continuous color changing, or keep the lights off.",
    image: "https://images-na.ssl-images-amazon.com/images/I/71SBG1yFIhL._AC_SL1400_.jpg",
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
    item: "LG Electronics 42.5 Screen LED-lit Monitor (43UD79-B)",
    brand: "LG",
    price: "500",
    category: "monitor",
    description:
      "43- inch UHD 4K (3840 x 2160) IPS monitor,HDCP 2.2 compatible,USB Type C connectivity,4x HDMI input,On screen control with screen split",
    image: "https://images-na.ssl-images-amazon.com/images/I/714ib-HkH3L._AC_SL1416_.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "Philips BDM4350UC 43 LED Monitor, 4K UHD IPS",
    brand: "Razer",
    price: "150",
    category: "monitor",
    description:
      "Philips 43 Class(42. 51 inches Viewable) LED monitor with 4K UHD 3840x2160 resolution,Ips panel for wide-viewing angles and full colors, displaying over 1 billion colors for real-life color accuracy",
    image: "https://images-na.ssl-images-amazon.com/images/I/91wcARQPFIL._AC_SL1500_.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "Linksys Tri-Band Wifi Routere",
    brand: "Linksys",
    price: "350",
    category: "router",
    description: "Provides up to 3,000 sq. ft. of WiFi coverage for 25+ wireless devices",
    image: "https://images-na.ssl-images-amazon.com/images/I/61qU72ikisL._AC_SL1000_.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "BLU Vivo XL4 6.2 inches HD Display Smartphone ",
    brand: "BLU",
    price: "100",
    category: "phone",
    description:
      "6.2” HD+ 19: 9 All Screen Design with Curved Glass Display",
    image: "https://images-na.ssl-images-amazon.com/images/I/81TGHYLM3TL._AC_SL1500_.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "Anker Soundcore Mini",
    brand: "Anker",
    price: "25",
    category: "speaker",
    description:
      "Super-Portable Bluetooth Speaker",
    image: "https://d2211byn0pk9fi.cloudfront.net/spree/products/78488/product/A3101111_ND01.png?1558317541.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "AOC U4308V 43 inches 4K UHD Monitor",
    brand: "AOC",
    price: "490",
    category: "monitor",
    description:
      "Accurate colors: IPS panel displaying over 1 billion colors producing 109% NTSC & 124% sRGB (area Percentage) color gamut coverage",
    image: "https://images-na.ssl-images-amazon.com/images/I/71YNvZCDvlL._AC_SL1500_.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "Samsung Galaxy S10+ Plus",
    brand: "Samsung",
    price: "1000",
    category: "phone",
    description:
      "6.4 inches, Dynamic AMOLED capacitive touchscreen, 16M colors, 1440 x 3040 pixels, Corning Gorilla Glass 6, 128GB Storage, 8GB RAM, Up to 512GB microSD Card slot (uses SIM 2 slot)",
    image: "https://images-na.ssl-images-amazon.com/images/I/61rkyzikWvL._AC_SL1321_.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },

  {
    item: "TP-Link AC5400 Tri Band Gaming Router",
    brand: "TP-Link",
    price: "400",
    category: "router",
    description: "TP-Link AC5400 Tri Band Gaming Router – MU-MIMO, 1.8GHz Quad-Core 64-bit CPU, Game First Priority, Link Aggregation, 16GB Storage, Airtime Fairness",
    image: "https://images-na.ssl-images-amazon.com/images/I/71MLybZ5IAL._AC_SL1500_.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "Dell OptiPlex",
    brand: "Dell  ",
    price: "99",
    category: "desktop",
    description:
      "Intel Core 2 Duo 2.9GHz Processor, 4GB Memory, 160GB Hard Drive, DVD, Windows 10, WiFi",
    image: "https://images-na.ssl-images-amazon.com/images/I/716-FpGj45L._AC_SL1500_.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "Dell OptiPlex Computer Package Dual",
    brand: "Dell  ",
    price: "190",
    category: "desktop",
    description:
      "Dual Core 3.0,New 8GB RAM, 250GB HDD, Windows 10 Home Edition, Dual 19 inches Monitor",
    image: "https://images-na.ssl-images-amazon.com/images/I/41IjL6rfJVL._AC_.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "Anker Soundcore 2 Portable Bluetooth Speaker",
    brand: "Anker",
    price: "30",
    category: "speaker",
    description:
      " With 12W Stereo Sound, Unbelievable sound: 12W of pure audio power with enhanced bass Thunders from dual neodymium drivers. An advanced digital signal processor ensures pounding bass and zero distortion at any volume.",
    image: "https://images-na.ssl-images-amazon.com/images/I/31A2v6OdybL._AC_.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "CUK Stratos Gamer PC",
    brand: "CUK Stratos",
    price: "3600",
    category: "desktop",
    description:
      "Processor: Intel Core i9-9900K 8-Core Processor (16MB Cache, 3.6GHz-5.0GHz) 95W (Liquid Cooled),RAM: 32GB DDR4 3000MHz | Hard Drive: 1TB NVMe Solid State Drive + 2TB 7200rpm Hard Disk Drive  (Liquid Cooled Intel Core i9-9900K, NVIDIA GeForce RTX 2080 Ti)",
    image: "https://images-na.ssl-images-amazon.com/images/I/71SIk3d-wmL._AC_SL1200_.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },

  {
    item: "GOgroove BassPULSE 2.1 Computer Speakers",
    brand: "GOgroove ",
    price: "80",
    category: "speaker",
    description:
      "POWERFUL 2.1 SOUND QUALITY WITH BOOMING SUBWOOFER : Satellite channel speakers and bass heavy sub woofer stream audio from any device using a standard 3.5mm AUX input or headphone port",
    image: "https://images-na.ssl-images-amazon.com/images/I/61jEUmvyPOL._AC_SL1200_.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "CyberpowerPC Gamer Xtreme VR Gaming PC",
    brand: "CyberpowerPC Gamer",
    price: "2000",
    category: "desktop",
    description:
      "System: Intel Core i9-9900k 3. 6GHz 8-Core: Intel Z390 Chipset, Liquid Cool Intel Core i9-9900K,16GB DDR4, 1TB PCI-E NV Me SSD: Genuine Windows 10 Home 64-bit,Graphics: NVIDIA GeForce RTX 2070 Super 8GB Video Card, 1x HDMI, 2x DisplayPort",
    image: "https://images-na.ssl-images-amazon.com/images/I/81d06hVL9EL._AC_SL1500_.jpg",
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