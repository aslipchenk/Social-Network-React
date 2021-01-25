import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Sveta" id="1"/>
                <DialogItem name="Dima" id="2" />
                <DialogItem name="Valera" id="3"/>
                <DialogItem name="Anton" id="4"/>
                <DialogItem name="Kolya" id='5'/>
            </div>
            <div className={classes.messages}>
                <Message message="Hi"/>
                <Message message="Hello world"/>
                <Message message="How are you?"/>
                
            </div>
        </div>
    )
}

export default Dialogs;