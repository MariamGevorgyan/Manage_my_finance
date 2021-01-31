import { useState } from 'react'
import LoginBtn from './registartion/LoginBtn'

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
                <LoginBtn />
            </div>
        </>
    )
}
