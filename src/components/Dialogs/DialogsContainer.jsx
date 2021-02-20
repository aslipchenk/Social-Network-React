import React from "react";
import {updateNewMessageText, addMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateMessage: (text) => {
            dispatch(updateNewMessageText(text));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}
const  DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;