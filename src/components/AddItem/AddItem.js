import React, { Component } from 'react';
import './AddItem.css';

class AddItem extends Component {



    render() {

        return (
            <>
                <h2>Add new item</h2>
                <form>
                    <label htmlFor="name">Name
                            <input type="text" />
                    </label>
                    <label htmlFor="quantity">Quantity
                            <input type="number" min="1" />
                    </label>
                    <button>Add to list</button>
                    <button>Cancel</button>
                </form>
            </>

        )
    }
}

export default AddItem;