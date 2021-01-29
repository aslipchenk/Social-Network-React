import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        dialogs: {
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
        },
        profile: {
            posts: {
                postData: [
                    {id: 1, message: "Hi", likesCount: 12},
                    {id: 2, message: "My name is Anton", likesCount: 1},
                    {id: 3, message: "How are you", likesCount: 2},
                    {id: 4, message: "I am junior Full Stack developer", likesCount: 10},
                    {id: 5, message: "Yo", likesCount: 6},
                ],
                newPostText: "Antoha the best",
            }
        },
        sideBar: {},
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber() {
        console.log("state changed");
    },


    dispatch(action) {

        this._state.profile.posts = profileReducer(this._state.profile.posts, action)
        this._state.dialogs = dialogsReducer(this._state.dialogs, action)
        this._state.sideBar = sidebarReducer(this._state.sideBar, action)

        this._callSubscriber();
    }
}






export default store;
window.store = store;








