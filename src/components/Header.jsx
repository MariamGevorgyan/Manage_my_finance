import { useState } from 'react'
import LoginBtn from './registartion/LoginBtn'
import './registartion/login.css'
import logo from './logo_2.png'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useParams,
    useRouteMatch,
} from 'react-router-dom'
export default function Header(props) {
    return (
        <>
            <div className="header">
                <Link to="/">
                    <img className="logo" src={logo} />
                </Link>
                <div className="signinup">
                    <Link to="/login">
                        <button className="btnin btn">Log in </button>
                    </Link>
                    <Link to="/registartion">
                        <button className="btnup btn">Sign up</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
