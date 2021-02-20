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
    // let stateCopy;
    switch (action.type) {
        case ADD_MESSAGE:
            let bodyText = state.newMessage;
            return {
                ...state,
                newMessage: "",
                dialogMessagesData: [...state.dialogMessagesData, {
                    id: state.dialogMessagesData.length + 1,
                    message: bodyText
                }]
            }
        // let bodyText = state.newMessage;
        // state.newMessage = "";
        // stateCopy = {...state};
        // stateCopy.dialogMessagesData.push({id: 6, message: bodyText});
        // return stateCopy
        case UPDATE_NEW_MESSAGE_TEXT:
            // stateCopy = {...state};
            // // copyState = JSON.parse(JSON.stringify(state));
            // stateCopy.newMessage = action.newTextMessage;
            // return stateCopy;
            return {
                ...state,
                newMessage: action.newTextMessage
            }
        default:
            return state;
    }
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