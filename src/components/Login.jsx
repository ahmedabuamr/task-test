import React from 'react'
import { redirect } from 'react-router-dom'
export default function (props) {
    const [email, setEmail] = React.useState("")
    const [users, setUsers] = React.useState([])

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(res => setUsers(res))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                body: JSON.stringify({
                    ...users,
                    email: email,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((res) => {
                    if (res.id) {
                        localStorage.setItem("item", res.id)
                        return window.location.pathname = '/'
                    }
                    else return window.location.pathname = '/login'

                }
                );


        } catch (error) {
            window.location.pathname = '/login'
        }

    }
    return (
        <div style={{ maxWidth: "800px", margin: "auto", marginTop: "35px" }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input style={{ padding: "6px 10px" }} type="email" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <button style={{ padding: "8px 10px ", background: "blue", cursor: "pointer", color: "#fff", border: "none" }}>Login</button>
            </form>
        </div>
    )
}
