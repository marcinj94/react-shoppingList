import React, { Component } from 'react';
import './AddItem.css';

class AddItem extends Component {

    minNumber = 1;

    state = {
        textInput: '',
        numberInput: this.minNumber,
        checkboxInput: false,
    }

    handleTextChange = (e) => {
        this.setState({
            textInput: e.target.value
        })
    }

    handleNumberChange = (e) => {
        this.setState({
            numberInput: e.target.value,
        })
    }

    handleCheckboxChange = (e) => {
        this.setState({
            checkboxInput: !this.state.checkboxInput
        });
    }

    handleSubmitAddItem = (e) => {
        e.preventDefault();
        console.log('Added item');
    }


    render() {

        return (
            <>
                <h2>Add new item</h2>
                <form onSubmit={this.handleSubmitAddItem}>
                    <label htmlFor="name">
                        Name
                        <input type="text" value={this.state.textInput} onChange={this.handleTextChange} />
                    </label>
                    <label htmlFor="quantity">
                        Quantity
                        <input type="number" min={this.minNumber} value={this.state.numberInput} onChange={this.handleNumberChange} />
                    </label>
                    <label htmlFor="important">
                        Important
                        <input type="checkbox" checked={this.state.checkboxInput} onChange={this.handleCheckboxChange} />
                    </label>
                    <button>Add to list</button>
                </form>
                <button>Cancel</button>
            </>

        )
    }
}

export default AddItem;