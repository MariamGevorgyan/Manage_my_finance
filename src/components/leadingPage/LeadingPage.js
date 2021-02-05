import React from 'react'
import './leading.css'
import img from './img.jpg'
import { Link } from 'react-router-dom'

export default function LeadingPage() {
    return (
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
                <Link to="/registration">
                    <button className="get-start btn">Get start</button>
                </Link>
            </div>
            <img className="content_img" src={img} />
        </div>
    )
}
