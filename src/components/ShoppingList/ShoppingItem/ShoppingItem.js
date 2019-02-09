import React from 'react';

import './ShoppingItem.css';

const ShoppingItem = (props) => {



    const shoppingItem = props.shoppingItems.reverse().map(shoppingItem => {

        const style = shoppingItem.important ? "important" : null;

        if (shoppingItem.active) {
            return (
                <li key={shoppingItem.id}>
                    <h3 className={style}>{shoppingItem.name}</h3>
                    <p>Quantity: {shoppingItem.quantity}</p>
                    <button onClick={props.move.bind(this, shoppingItem.id)}>Add to bag</button>
                    <button onClick={props.delete.bind(this, shoppingItem.id)}>Delete</button>
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