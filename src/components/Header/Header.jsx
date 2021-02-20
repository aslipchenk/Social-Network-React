import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={`${classes.header} navbar navbar-light bg-light`}>
            <div className="container-fluid">
                <NavLink className="navbar-brand" to='/profile'>
                    <img src="https://images.freecreatives.com/wp-content/uploads/2016/08/Fire-Abstract-Logo-Design.jpg"
                         alt="" width="30" height="24"
                         className="d-inline-block align-top" />
                        Postogram
                </NavLink>
            </div>
        </header>
)
}

export default Header;