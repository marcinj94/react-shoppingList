import React from 'react';

import BagItem from './BagItem/BagItem';
import './BagList.css';

const BagList = (props) => {

    const counter = props.shoppingItems.filter(shoppingItem => !shoppingItem.active).length;
    console.log(counter);

    const content = counter > 0 ?
        <div className="bag-list">
            <h2 className="bag__title">Bag list ({counter})</h2>
            <ul>
                <BagItem
                    shoppingItems={props.shoppingItems}
                    delete={props.delete}
                />
            </ul>
        </div > : null;


    return (
        <>
            {content}
        </>
    );
}

export default BagList;