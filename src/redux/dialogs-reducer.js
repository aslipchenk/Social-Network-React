// import {addMessageActionCreator} from "./state";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogData: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Sveta"},
        {id: 3, name: "Valera"},
        {id: 4, name: "Anton"},
        {id: 5, name: "Kolyan"},
    ],
    dialogMessagesData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "My name is Anton"},
        {id: 3, message: "How are you"},
        {id: 4, message: "I am junior Full Stack developer"},
        {id: 5, message: "Yo"},

    ],
    newMessage: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessage
            }
            state.dialogMessagesData.push(newMessage);
            state.newMessage = "";
            break;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessage = action.newTextMessage;
            break;
        default:
            break;
    }
    return state;
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,
    }
}

export const updateNewMessageText = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newTextMessage: text,
    }
}

export default dialogsReducer;