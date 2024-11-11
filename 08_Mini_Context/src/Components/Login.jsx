import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'





function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleClick = (e) => {
        e.preventDefault()
        setUser({username,password})
    }

    return (
        <div>
            <h1>Login Form</h1>

            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Enter Username'
            />

            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter Password'
            />

            <button onClick={handleClick}>Submit</button>

        </div>
    )
}

export default Login
