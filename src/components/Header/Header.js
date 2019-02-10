import React from 'react';

import './Header.css'

const Header = (props) => {

    const textContent = !props.formActive ? "Show form" : "Hide form";

    return (
        <header className="header">
            <h1 className="header__title">React.js Shopping List</h1>
            <button className="header__btn" onClick={props.click}>{textContent}</button>
        </header>
    );
}

export default Header;