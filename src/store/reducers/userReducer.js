const initialState = {
    users: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            return { users: [action.payload, ...state.users] };
        case "DELETE_USER":
            const users = state?.users?.filter((val) => val.id !== action.id)
            return {
                users: users
            }
        default:
            return state;
    }
}

export default userReducer