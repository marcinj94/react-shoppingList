import React from 'react';

const BagItem = (props) => {



    const shoppingItem = props.shoppingItems.reverse().map(shoppingItem => {

        const finishDate = new Date(shoppingItem.finishDate).toLocaleString();

        if (!shoppingItem.active) {
            return (
                <li key={shoppingItem.id}>
                    <h3>{shoppingItem.name} x{shoppingItem.quantity}</h3>
                    <p>{finishDate}</p>
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

export default BagItem;