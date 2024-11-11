import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {

    const { user } = useContext(UserContext)

    if (!user) return (
        <div>
            <h1>Profile Page</h1>
            <h3>Please Login</h3>
        </div>

    )

    return (
        <div>
            <h1>Profile Page</h1>
            <h3>Welcome {user.username}</h3>
        </div>
    )
}

export default Profile
