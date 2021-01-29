import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    profile: profileReducer,
    sidebarPage: sidebarReducer,
    dialogs: dialogsReducer,
}
);

let store = createStore(reducers);

// console.log(store);

export default store;