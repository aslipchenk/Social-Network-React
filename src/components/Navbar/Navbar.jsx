import React from 'react';
import classes from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={`row`}>
                <div className="col-12">
                    <div className="list-group" id="list-tab" role="tablist">
                        <NavLink activeClassName={`active`} className={`list-group-item list-group-item-action`}
                                 id="list-home-list" data-bs-toggle="list" role="tab" aria-controls="profile"
                                 to="/profile">Profile</NavLink>
                        <NavLink activeClassName={`active`} className={`list-group-item list-group-item-action`}
                                 id="list-home-list" data-bs-toggle="list" role="tab" aria-controls="dialogs" to="/dialogs">Messages</NavLink>
                        <NavLink activeClassName={`active`} className={`list-group-item list-group-item-action`}
                                 id="list-home-list" data-bs-toggle="list" role="tab" aria-controls="news" to='/news'>News</NavLink>
                        <NavLink activeClassName={`active`} className={`list-group-item list-group-item-action`}
                                 id="list-home-list" data-bs-toggle="list" role="tab" aria-controls="music" to='/music'>Music</NavLink>
                        <NavLink activeClassName={`active`} className={`list-group-item list-group-item-action`}
                                 id="list-home-list" data-bs-toggle="list" role="tab" aria-controls="users" to='/users'>Users</NavLink>
                        <NavLink activeClassName={`active`} className={`list-group-item list-group-item-action`}
                                 id="list-home-list" data-bs-toggle="list" role="tab" aria-controls="settings" to='/settings'>Settings</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;