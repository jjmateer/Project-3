import React from "react";
import "./style.css";

function itemForm({ handleFormSubmit }) {
  return (
    <div>
      <form className="form-group">
        <h4>Item :</h4>
        <input
          className="form-control"
          type="itemName"
          placeholder="Product"
          required
        />
        <h4>Brand :</h4>
        <input className="form-control" type="brandName" placeholder="Brand" />
        <h4>Price :</h4>
        <input className="form-control" type="itemPrice" placeholder="Price" />
        <h4>Category :</h4>
        <input
          className="form-control"
          type="categoryName"
          placeholder="Category"
        />
        <h4>Description :</h4>
        <input
          className="form-control"
          type="itemDescription"
          placeholder="Description"
        />
        <h4>Image :</h4>
        <input
          className="form-control"
          type="imgSrc"
          placeholder="Image Adress"
        />
        <h4>Quantity in stock :</h4>
        <input
          className="form-control"
          type="inStock"
          placeholder="Quanitity"
        />
      </form>
    </div>
  );
}

export default itemForm;