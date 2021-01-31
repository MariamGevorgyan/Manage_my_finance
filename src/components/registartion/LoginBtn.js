import './login.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { useParams } from 'react'

export default function LoginBtn() {
    return (
        <>
            <Link to="/registartion">
                <button className="btn loginBtn">Sign in </button>
            </Link>
        </>
    )
}
