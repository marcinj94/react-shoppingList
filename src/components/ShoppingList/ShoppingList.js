import React from 'react';

import './ShoppingList.css';
import ShoppingItem from './ShoppingItem/ShoppingItem';

const ShoppingList = (props) => {

    const counter = props.shoppingItems.filter(shoppingItem => shoppingItem.active).length;
    console.log(counter);

    const content = counter > 0 ?
        <div className="shopping-list">
            <h2>Shopping list ({counter}) products</h2>
            <ul>
                <ShoppingItem
                    shoppingItems={props.shoppingItems}
                />
            </ul>
        </div> : null;


    return (
        <>
            {content}
        </>
    );
}

export default ShoppingList;