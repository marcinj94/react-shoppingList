import React from 'react';

import BagItem from './BagItem/BagItem';

const BagList = (props) => {

    const counter = props.shoppingItems.filter(shoppingItem => !shoppingItem.active).length;
    console.log(counter);

    const content = counter > 0 ?
        <div className="bag-list">
            <h2>Bag list ({counter}) products</h2>
            <ul>
                <BagItem
                    shoppingItems={props.shoppingItems}
                    delete={props.delete}
                />
            </ul>

            <hr />
        </div > : null;


    return (
        <>
            {content}
        </>
    );
}

export default BagList;