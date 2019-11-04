const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Inventory collection and inserts the items below

const itemSeeds = [
  {
    item: "Mac Book",
    brand: "Apple",
    price: "1099",
    description: "Pretty cool, if you like Apple...",
    image: "https://i.imgur.com/qIVwgvQ.jpg",
    quantityInStock: 100,
    date: new Date(Date.now())
  },
  {
    item: "ThinkPad",
    brand: "Lenovo",
    price: "999",
    description: "the ultimate computing machine..",
    image: "https://i.imgur.com/6mFoHuu.jpg",
    quantityInStock: 100,
    date: new Date(Date.now())
  },
  {
    item: "iPad",
    brand: "Apple",
    price: "499",
    description: "Pretty cool, if you like Apple...",
    image: "https://i.imgur.com/1v35cu1.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "Surface Pro",
    brand: "Microsoft",
    price: "1499",
    description: "like an iPad, but costs more",
    image: "https://i.imgur.com/YKAe4WZ.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "Pixel 4",
    brand: "Google",
    price: "899",
    description: "like an iPhone but costs less",
    image: "https://i.imgur.com/wpnC1fK.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "iPhone 11",
    brand: "Apple",
    price: "1399",
    description: "the gold standard in smart phones...",
    image: "https://i.imgur.com/FXm7cdK.jpg",
    quantityInStock: 200,
    date: new Date(Date.now())
  },
  {
    item: "Code: The Hidden Language of Computer Hardware and Software",
    brand: "Charles Petzold",
    price: "",
    date: new Date(Date.now())
  },
  {
    item: "The Everything Store: Jeff Bezos and the Age of Amazon",
    brand: "Brad Stone",
    price: "",
    date: new Date(Date.now())
  },
  {
    item: "Total Recall: My Unbelievably True Life Story",
    brand: "Arnold Schwarzenegger",
    price: "",
    date: new Date(Date.now())
  },
  {
    item: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
    brand: "Ashlee Vance",
    price: "",
    date: new Date(Date.now())
  },
  {
    item: "Steve Jobs",
    brand: "Walter Isaacson",
    price: "",
    date: new Date(Date.now())
  },
  {
    item: "Astrophysics for People in a Hurry",
    brand: "Neil deGrasse Tyson",
    price: "",
    date: new Date(Date.now())
  },
  {
    item: "1984",
    brand: "George Orwell",
    price: "",
    date: new Date(Date.now())
  },
  {
    item: "Frankenstein",
    brand: "Mary Shelley",
    price: "",
    date: new Date(Date.now())
  },
  {
    item: "The Great Gatsby",
    brand: "F. Scott Fitzgerald",
    price: "",
    date: new Date(Date.now())
  },
  {
    item: "Born a Crime: Stories from a South African Childhood",
    brand: "Trevor Noah",
    price: "",
    date: new Date(Date.now())
  }
];

// db.Book
//   .remove({})
//   .then(() => db.Book.collection.insertMany(bookSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
