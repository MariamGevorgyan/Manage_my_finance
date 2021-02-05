import React from 'react'
import './leading.css'
import img from './img.jpg'
import { Link } from 'react-router-dom'
import icon from './v.svg'

export default function LeadingPage() {
    return (
        <>
            <div className="leadingContent">
                <div className="content">
                    <span className="content_1">
                        Experience a <br />
                        fresh way to
                    </span>
                    <span className="content_2">manage money</span>
                    <span className="content_3">
                        Reach your goals with personalized insights, custom
                        <br /> budgets, spend tracking, and subscription
                        monitoring—all <br />
                        for free.
                    </span>
                    <Link to="/registartion">
                        <button className="get-start btn">Get start</button>
                    </Link>
                </div>
                <img className="content_img" src={img} />
            </div>
            <div class="afther_footer">
                <div>
                    <svg
                        width="40"
                        height="40"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <image href={icon} height="40" width="40" />
                    </svg>
                    <span>#1 most downloaded personal finance app*</span>
                </div>
                <div>
                    <svg
                        width="40"
                        height="40"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <image href={icon} height="40" width="40" />
                    </svg>
                    <span>Budget-friendly, totally free</span>
                </div>
            </div>
        </>
    )
}
