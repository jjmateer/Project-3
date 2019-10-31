import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Inventory extends Component {
  // Setting our component's initial state
  state = {
    Inventory: [],
    item: "",
    brand: "",
    price: ""
  };

  // When the component mounts, load all inventory and save them to this.state.inventory
  componentDidMount() {
    this.loadInventory();
  }

  // Loads all inventory  and sets them to this.state.inventory
  loadInventory = () => {
    API.getInventory()
      .then(res =>
        this.setState({ Inventory: res.data, item: "", brand: "", price: "" })
      )
      .catch(err => console.log(err));
  };

  // Deletes an item from the database with a given id, then reloads inventory from the db
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
  // reload inventory from the database
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
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add Item</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.item}
                onChange={this.handleInputChange}
                name="item"
                placeholder="Item (required)"
              />
              <Input
                value={this.state.brand}
                onChange={this.handleInputChange}
                name="brand"
                placeholder="Brand (required)"
              />
              <Input
                value={this.state.price}
                onChange={this.handleInputChange}
                name="price"
                placeholder="Price (required)"
              />
              <FormBtn
                disabled={!(this.state.brand && this.state.item)}
                onClick={this.handleFormSubmit}
              >
                Submit Item
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Items I Want</h1>
            </Jumbotron>
            {this.state.Inventory.length ? (
              <List>
                {this.state.Inventory.map(item => {
                  return (
                    <ListItem key={item._id}>
                      <a href={"/inventory/" + item._id}>
                        <strong>
                          {item.item} by {item.brand}
                          Price: ${item.price}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteItem(item._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Inventory;
