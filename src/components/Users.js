import React from 'react'
import { useSelector } from 'react-redux'

const Users = () => {
    const users = useSelector(users => users)
    console.log({ users })

    return (
        <div>
            <h1>Users</h1>
        </div>
    )
}

export default Users
