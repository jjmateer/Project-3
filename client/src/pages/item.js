import React, { Component } from "react";
import itemForm from "../components/itemform";
import API from "../utils/API";

class Item extends Component {
  // Setting our component's initial state
  state = {
    Item: [],
    item: "",
    brand: "",
    price: ""
  };

  // When the component mounts, load all Item and save them to this.state.Item
  componentDidMount() {
    this.loadInventory();
  }

  // Loads all Item  and sets them to this.state.Item
  loadInventory = () => {
    API.getInventory()
      .then(res =>
        this.setState({ Item: res.data, item: "", brand: "", price: "" })
      )
      .catch(err => console.log(err));
  };

  // Deletes an item from the database with a given id, then reloads Item from the db
  deleteItem = id => {
    API.deleteItem(id)
      .then(res => this.loadInventory())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveItem method to save the item data
  // reload Item from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.item && this.state.brand && this.state.price) {
      API.saveItem({
        item: this.state.item,
        brand: this.state.brand,
        price: this.state.price
      })
        .then(res => this.loadInventory())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <h1>Add Item</h1>
        <itemForm
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
      </div>
      //  <div>
      //    <h1>Items I Want</h1>
      //   {function() {
      //     if (this.state.Item.length > 0) {
      //       {
      //         this.state.Item.length ? (
      //           <ul>
      //             {this.state.Item.map(item => {
      //               return (
      //                 <li key={item._id}>
      //                   <a href={"/Item/" + item._id}>
      //                     <strong>
      //                       {item.item} by {item.brand}
      //                       Price: ${item.price}
      //                     </strong>
      //                   </a>
      //                   <button onClick={() => this.deleteItem(item._id)} />
      //                 </li>
      //               );
      //             })}
      //           </ul>
      //         ) : (
      //           <h3>No Results to Display</h3>
      //         );
      //       }
      //     }
      //   }}
      //  </div>
      // </div>
    );
  }
}

export default Item;
