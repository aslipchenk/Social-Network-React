import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profile: profileReducer,
    sidebarPage: sidebarReducer,
    dialogs: dialogsReducer,
    usersPage: usersReducer,
}
);

let store = createStore(reducers);

window.store = store;
// console.log(store);

export default store;