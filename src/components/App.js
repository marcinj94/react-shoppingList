import React, { Component } from 'react';

import Header from './Header/Header';
import AddItem from './AddItem/AddItem';
import ShoppingList from './ShoppingList/ShoppingList';
import BagList from './BagList/BagList';

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

    const index = shoppingItems.findIndex(shoppingItem => shoppingItem.id === id);

    shoppingItems.forEach(shoppingItem => {
      if (shoppingItem.id === id) {
        shoppingItem.active = false;
        shoppingItem.finishDate = new Date().getTime();
      }
    });

    this.setState({
      shoppingItems
    })

    console.log('przeniesiony o indeksie ' + index);
  }

  render() {

    return (
      <>
        <Header />

        <AddItem
          add={this.addItem}
        />

        <ShoppingList
          shoppingItems={this.state.shoppingItems}
          delete={this.deleteItem}
          move={this.moveItemToBagList}
        />

        <BagList
          shoppingItems={this.state.shoppingItems}
          delete={this.deleteItem}
        />
      </>


      // <div className="App">

      //   <header>
      //     <h1>React.js - Shopping List</h1>
      //   </header>

      //   <hr />

      //   <form>
      //     <label htmlFor="name">Name
      //       <input type="text" />
      //     </label>
      //     <label htmlFor="description">
      //     </label>
      //     <label htmlFor="quantity">
      //       <input type="number" min="1" />
      //     </label>
      //     <button>Add to list</button>
      //     <button>Cancel</button>
      //   </form>

      //   <hr />

      //   <div className="shopping-list">
      //     <h2>Shopping list (3) products</h2>
      //     <ul>
      //       <li>
      //         <p>lorem ipsum</p>
      //         <button>Add to bag</button>
      //         <button>Delete</button>
      //       </li>
      //       <li>
      //         <p>lorem ipsum</p>
      //         <button>Add to bag</button>
      //         <button>Delete</button>
      //       </li>
      //       <li>
      //         <p>lorem ipsum</p>
      //         <button>Add to bag</button>
      //         <button>Delete</button>
      //       </li>
      //     </ul>
      //   </div>

      //   <div className="addedToBag">
      //     <h2>Added to bag (2) products</h2>
      //     <ul>
      //       <li>
      //         <p>lorem ipsum</p>
      //         <button>Delete</button>
      //       </li>
      //       <li>
      //         <p>lorem ipsum</p>
      //         <button>Delete</button>
      //       </li>
      //     </ul>
      //   </div>
      // </div>
    );
  }
}

export default App;
