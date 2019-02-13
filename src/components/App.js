import React, { Component } from 'react';

import Header from './Header/Header';
import AddItem from './AddItem/AddItem';
import ShoppingList from './ShoppingList/ShoppingList';
import BagList from './BagList/BagList';

import './App.css';

class App extends Component {

  idCounter = 4;

  state = {
    shoppingItems: [],
    formActive: true,
  }

  showHideForm = () => {
    this.setState({
      formActive: !this.state.formActive,
    })
  }

  addItem = (name, quantity, important) => {
    let item = {
      id: this.idCounter,
      name,
      quantity,
      important,
      active: true,
      finishDate: null,
    }

    this.setState(prevState => ({
      shoppingItems: [...prevState.shoppingItems, item]
    }));

    this.idCounter++;
    return true;
  }

  deleteItem = (id) => {
    const shoppingItems = [...this.state.shoppingItems];

    const index = shoppingItems.findIndex(shoppingItem => shoppingItem.id === id);
    shoppingItems.splice(index, 1);

    this.setState({
      shoppingItems
    })
  }

  moveItemToBagList = (id) => {

    const shoppingItems = [...this.state.shoppingItems];

    shoppingItems.forEach(shoppingItem => {
      if (shoppingItem.id === id) {
        shoppingItem.active = false;
        shoppingItem.finishDate = new Date().getTime();
      }
    });
    this.setState({
      shoppingItems
    })
  }

  render() {

    return (
      <>
        <Header
          click={this.showHideForm}
          formActive={this.state.formActive}
        />

        <AddItem
          add={this.addItem}
          formActive={this.state.formActive}
        />

        <div className="list">
          <ShoppingList
            shoppingItems={this.state.shoppingItems}
            delete={this.deleteItem}
            move={this.moveItemToBagList}
          />

          <BagList
            shoppingItems={this.state.shoppingItems}
            delete={this.deleteItem}
          />
        </div>

      </>
    );
  }
}

export default App;
