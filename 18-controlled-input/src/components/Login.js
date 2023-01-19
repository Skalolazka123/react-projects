import { useState } from 'react'
function Login() {
    const [data, setData] = useState({ username: '', password: '' })

    function handleFormSubmit(event) {
        event.preventDefault()
        console.log(data)
        alert(JSON.stringify(data))
    }

    function handleInputChange(name, text) {
        setData({
            ...data,
            [name]: text,
        }) /* ...data = Spread */
    }

    return (
        <>
            <h1>Login Form</h1>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={data.username}
                        onChange={(e) =>
                            handleInputChange('username', e.target.value)
                        }
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={data.password}
                        onChange={(e) =>
                            handleInputChange('password', e.target.value)
                        }
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login
