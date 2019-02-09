import React from 'react';

const BagItem = (props) => {



    const shoppingItem = props.shoppingItems.reverse().map(shoppingItem => {
        if (!shoppingItem.active) {
            return (
                <li key={shoppingItem.id}>
                    <h3>{shoppingItem.name}</h3>
                    <p>Quantity: {shoppingItem.quantity}</p>
                    <button onClick={props.delete}>Delete</button>
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

export default BagItem;