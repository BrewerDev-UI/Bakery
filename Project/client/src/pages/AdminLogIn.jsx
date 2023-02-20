import React, { useState } from 'react'
import { useLogin } from '../hooks/useLogIn'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AdminLogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isLoading } = useLogin()
    const navigate = useNavigate();


    // const handleSubmit = async (e) => {
    //     e.preventDefault()

    //     await login(email, password)
    //     navigate('/admin/manager')
    // }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(`http://localhost:8000/api/admin/login`, { email, password })
            .then(res => {
                console.log(res)
                navigate('/admin/manager')
            })
            .catch(err => console.log(err));
    };


    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleSubmit}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Adminstator Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            onChange={(e) => { setEmail(e.target.value) }} value={email}
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            onChange={(e) => { setPassword(e.target.value) }} value={password}
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" disabled={isLoading} >
                            Log In
                        </button>
                    </div>
                    {error && <div className='error'>{error}</div>}

                </div>
            </form>
        </div>
    )
}

export default AdminLogIn