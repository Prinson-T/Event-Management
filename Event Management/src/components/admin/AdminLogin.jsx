import React from 'react'
import './AdminLogin.css'
import { Link } from 'react-router-dom'
function AdminLogin() {
    return (
        <div>
            <div className="login-screen">
                <div className="split right-side">
                    <div className="login-box">
                        <h1>Welcome back!</h1>
                        <p>Enter your Credentials to access your account</p>
                        <form>
                            <input type="text" placeholder="Username" required />
                            <input type="password" placeholder="Password" required />
                            <button type="submit">Login</button>
                            <a className='forgot' href="">forgot password</a>
                        </form>

                    </div>
                </div>
                <div className="split left-side" aria-label="Background image"></div>
            </div>
        </div>
    )
}

export default AdminLogin