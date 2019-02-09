import React from 'react';

import './ShoppingItem.css';

const ShoppingItem = (props) => {



    const shoppingItem = props.shoppingItems.reverse().map(shoppingItem => {
        if (shoppingItem.active) {
            return (
                <li key={shoppingItem.id}>
                    <h3>{shoppingItem.name}</h3>
                    <p>Quantity: {shoppingItem.quantity}</p>
                    <button>Add to bag</button>
                    <button>Delete</button>
                </li>
            )
        } else {
            return null;
        }
    })


    return (
        <>
            {shoppingItem}
        </>
    );
}

export default ShoppingItem;