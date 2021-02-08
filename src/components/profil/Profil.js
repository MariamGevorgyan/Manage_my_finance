import React from 'react'
import firebase from 'firebase'
import './profil.css'
export default function Profil() {
    console.log(firebase.database())

    return (
        <div className="container">
            <div className="row">
                <div className="col-7">
                    <div className="container calon2 ">
                        <div className="row">
                            <div className="calon1 col-5">
                                <div class="card" style={{ width: '18rem' }}>
                                    <img
                                        className="card-img-top"
                                        src="https://www.investopedia.com/thmb/PA0DhNMY2cGhy0tmZMx8aD8-YZQ=/3000x2089/filters:fill(auto,1)/GettyImages-849890606-c069ca46f1894da4a78505cb660b3bd1.jpg"
                                        alt="Card image cap"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Warren Buffett
                                        </h5>
                                        <p className="card-text">
                                            We simply attempt to be fearful when
                                            others are greedy and to be greedy
                                            only when others are fearful.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="row">
                                    <h4 className="font-weight-bold">
                                        Name: Worren
                                    </h4>
                                    <h4 className="font-weight-bold">
                                        Surname: Buffet
                                    </h4>
                                    <h4 className="font-weight-bold">
                                        Age: 145
                                    </h4>
                                    <h4 className="font-weight-bold">
                                        Last login: 17.01.1875
                                    </h4>
                                    <h4 className="font-weight-bold">
                                        Type: Siro hreshtak
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
