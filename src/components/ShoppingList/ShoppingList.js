import React from 'react';

import './ShoppingList.css';
import ShoppingItem from './ShoppingItem/ShoppingItem';

const ShoppingList = (props) => {

    const counter = props.shoppingItems.filter(shoppingItem => shoppingItem.active).length;

    const content = counter > 0 ?
        <div className="shopping-list">
            <h2 className="shopping__title">Shopping list ({counter})</h2>
            <ul >
                <ShoppingItem
                    shoppingItems={props.shoppingItems}
                    delete={props.delete}
                    move={props.move}
                />
            </ul>
        </div > :
        <div className="shopping-list">
            <h2 className="shopping__title">Shopping list</h2>
            <p>There are no items in your list.</p>
        </div >;


    return (
        <>
            {content}
        </>
    );
}

export default ShoppingList;