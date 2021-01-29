import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
// import {updateNewMessageText} from "../../redux/state";
import {updateNewMessageText, addMessageActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    let createNewMessage = React.createRef();
    let messages = props.state.dialogMessagesData.map(value => <Message message={value.message} id={value.id}/>);


    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let updateMessage = (e) => {
        let text = e.target.value;//createNewMessage.current.value;
        props.dispatch(updateNewMessageText(text));
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.state.dialogData.map((value => <DialogItem name={value.name} id={value.id}/>))}
            </div>
            <div className={classes.messages}>
                {messages.filter((value, index, array) => index > array.length - 6)}
            </div>
            <div>
                <textarea ref={createNewMessage} onChange={updateMessage} value={props.state.newMessage} placeholder='Enter your message'/>
                <br />
                <button onClick={addMessage}>Add</button>
            </div>
        </div>
    )
}

export default Dialogs;