import LoginBtn from './registartion/LoginBtn'
import { useState } from 'react'
export default function Header(props) {
    const [popUp, setPopUp] = useState(false)
    function showPop() {
        setPopUp(!popUp)
    }
    return (
        <div className="header">
            {props.children}

            <LoginBtn />
        </div>
    )
}
