const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS";

const initialState = {
    users: [
        {
            id: 1,
            photoUrl: '',
            followed: false,
            fullName: "Valentin",
            status: "I am a boss",
            location: {city: "Moskow", country: "Russia"}
        },
        {
            id: 2,
            photoUrl: '',
            followed: true,
            fullName: "Yaroslav",
            status: "I am play game like a pro",
            location: {city: "Kiev", country: "Ukraine"}
        },
        {
            id: 3,
            photoUrl: '',
            followed: false,
            fullName: "Anton",
            status: "I like to ride bikes",
            location: {city: "New York", country: "USA"}
        },
        {
            id: 4,
            photoUrl: '',
            followed: true,
            fullName: "Dima",
            status: "Oh shiiit",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: 5,
            photoUrl: '',
            followed: false,
            fullName: "John",
            status: "So am i",
            location: {city: "Berlin", country: "Germany"}
        },

    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? ({...u, followed: true}) : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? ({...u, followed: false}) : u)
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer