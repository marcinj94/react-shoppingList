import React, { Component } from 'react';

import Header from './Header/Header';
import AddItem from './AddItem/AddItem';

class App extends Component {

  idCounter = 4;

  state = {
    shoppingList: [
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
        active: true,
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
      shoppingList: [...prevState.shoppingList, item]
    }));

    this.idCounter++;
    return true;
  }

  render() {

    return (
      <>
        <Header />

        <AddItem
          add={this.addItem}
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
