import React from 'react'
import './leading.css'
import img from './img.jpg'
import { Link } from 'react-router-dom'
import icon from './v.svg'

export default function LeadingPage() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-10">
                        <div className="leadingContent">
                            <div className="content">
                                <span className="content_1">
                                    The easiest way to <br /> manage personal
                                    finance
                                </span>
                                {/* <span className="content_2">manage money</span> */}
                                <span className="content_3">
                                    Money will take you wherever you whish,
                                    <br /> but it will not please you as the
                                    driver.
                                </span>
                                <Link to="/registartion">
                                    <button className="get-start btn">
                                        Get start
                                    </button>
                                </Link>
                            </div>
                            <img className="content_img" src={img} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="afther_footer">
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
                        <image
                            href={icon}
                            className="img-fluid"
                            height="40"
                            width="40"
                        />
                    </svg>
                    <span>Budget-friendly, totally free</span>
                </div>
            </div> */}
        </>
    )
}
