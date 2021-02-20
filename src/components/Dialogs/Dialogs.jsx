import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    // console.log(props.state);
    let createNewMessage = React.createRef();
    let messages = props.dialogs.dialogMessagesData.map(value => <Message message={value.message} key={value.id} id={value.id}/>);

    let addMessage = () => {
        props.addMessage();
    }

    let updateMessage = (e) => {
        let text = e.target.value;//createNewMessage.current.value;
        props.updateMessage(text);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.dialogs.dialogData.map((value => <DialogItem name={value.name} key={value.id} id={value.id}/>))}
            </div>
            <div className={classes.messages}>
                {messages.filter((value, index) => index > messages.length - 6)}
                {/*{messages}*/}
            </div>
            <div>
                <textarea ref={createNewMessage} onChange={updateMessage} value={props.dialogs.newMessage} placeholder='Enter your message'/>
                <br />
                <button className={`btn btn-outline-primary`} onClick={addMessage}>Add</button>
            </div>
        </div>
    )
}

export default Dialogs;