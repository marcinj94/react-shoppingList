import React, { Component } from 'react';
import './AddItem.css';

class AddItem extends Component {

    minNumber = 1;

    state = {
        textInput: '',
        numberInput: this.minNumber,
        checkboxInput: false,
        errorMessage: '',
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

        const { textInput, numberInput, checkboxInput } = this.state;


        if (textInput.length >= 3) {
            const func = this.props.add(textInput, numberInput, checkboxInput);

            if (func) {
                this.setState({
                    textInput: '',
                    numberInput: this.minNumber,
                    checkboxInput: false,
                    errorMessage: '',
                })

            }
        } else {
            this.setState({
                errorMessage: 'Name was too short!',
            })
        }

    }

    handleReset = () => {
        this.setState({
            textInput: '',
            numberInput: this.minNumber,
            checkboxInput: false,
            errorMessage: '',
        });
    }


    render() {

        const formActive = this.props.formActive;

        const content = formActive ?

            <section className="addItem">
                <h2 className="addItem__title">Add New Item</h2>
                <form className="form" onSubmit={this.handleSubmitAddItem}>
                    <label htmlFor="name">
                        Name:
                        <input type="text" id="name" placeholder="Name" required value={this.state.textInput} onChange={this.handleTextChange} />
                        {this.state.errorMessage && <span className="error__msg">{this.state.errorMessage}</span>}
                    </label>
                    <label htmlFor="quantity">
                        Quantity:
                        <input type="number" id="number" min={this.minNumber} value={this.state.numberInput} onChange={this.handleNumberChange} />
                    </label>
                    <label htmlFor="important">
                        Important
                        <input type="checkbox" id="important" checked={this.state.checkboxInput} onChange={this.handleCheckboxChange} />
                    </label>
                    <button className="form__btn">Add to list</button>
                </form>
                <button className="reset__btn" onClick={this.handleReset}>Reset</button>
            </section>
            : null;

        return (
            <>
                {content}
            </>
        )
    }
}

export default AddItem;