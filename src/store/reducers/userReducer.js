const initialState = {
    users: [
        { id: 1, name: "Qasim", city: "Karachi" }
    ]
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default userReducer