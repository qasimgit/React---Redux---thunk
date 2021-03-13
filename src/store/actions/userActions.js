import axios from "axios"


const fetchUsers = () => {                // thunk async  middleware always return an functuion with dispatch and states
    return async (dispatch) => {
        try {
            const users = await axios.get("https://jsonplaceholder.typicode.com/users")
            console.log(users)
            dispatch({ type: "STORE_USERS", payload: users.data })

        } catch (err) {
            console.log("err", err)
        }

    }

}

export default fetchUsers