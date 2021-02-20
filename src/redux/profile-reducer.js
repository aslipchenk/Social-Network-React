const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
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
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                message: state.posts.newPostText,
                likesCount: 0,
            }
            let stringCopy = JSON.stringify(state);
            let stateCopy = JSON.parse(stringCopy);
            stateCopy.posts.postData.unshift(newPost);
            stateCopy.posts.newPostText = "";
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:
            let stateCopy = {...state};
            stateCopy.posts = {...state.posts};
            // let stateCopy = JSON.parse(stringCopy);
            stateCopy.posts.newPostText = action.newText;
            return stateCopy;
        default:
            return state;
    }

    // return state;
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}

export default profileReducer;