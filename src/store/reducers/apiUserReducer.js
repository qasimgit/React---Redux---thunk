const initialState = {
    allUsers: []

}




const apiUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case "STORE_USERS":
            return { allUsers: action.payload }
        default:
            return state
    }

}

export default apiUserReducer