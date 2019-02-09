import React, { Component } from 'react';

import Header from './Header/Header';
import AddItem from './AddItem/AddItem';
import ShoppingList from './ShoppingList/ShoppingList';
import BagList from './BagList/BagList';

import './App.css';

class App extends Component {

  idCounter = 4;

  state = {
    shoppingItems: [
      {
        id: 0,
        name: 'Onions',
        quantity: 3,
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        name: 'Fish',
        quantity: 2,
        important: false,
        active: false,
        finishDate: null,
      },
      {
        id: 2,
        name: 'Ketchup',
        quantity: 1,
        important: false,
        active: true,
        finishDate: null,
      },
    ]
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
    console.log(item);

    this.setState(prevState => ({
      shoppingItems: [...prevState.shoppingItems, item]
    }));

    this.idCounter++;
    return true;
  }

  deleteItem = (id) => {
    const shoppingItems = [...this.state.shoppingItems];
    console.log(shoppingItems);

    const index = shoppingItems.findIndex(shoppingItem => shoppingItem.id === id);
    shoppingItems.splice(index, 1);
    console.log(shoppingItems);
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
        <Header />

        <AddItem
          add={this.addItem}
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
