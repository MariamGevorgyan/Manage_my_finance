import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Login from './components/registartion/Login'
import LinerChart from './components/charts/linerChart'
import PieCharts from './components/Rotation/PieCharts'
import Cards from './components/Rotation/Cards'
import Signup from './components/registartion/Signup'
import User from './components/Rotation/User'
import ForgotPassword from './components/registartion/ForgotPassword'
import Navbar from './components/NavBar/Navbar'
import LeadingPage from './components/LeadingPage/LeadingPage'

import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
} from 'react-router-dom'

function App() {
    const [loggedIn, setLoggedIn] = useState(false)
    return (
        <div className="App">
            <Router>
                {loggedIn ? <Navbar /> : <Header />}

                <Switch>
                    <Route exact path="/">
                        {loggedIn ? (
                            <Redirect exact to="/dashboard" />
                        ) : (
                            <LeadingPage />
                        )}
                    </Route>
                    <Router exact path="/dashboard">
                        <div className="linerChart">
                            <Cards />
                            <LinerChart />
                        </div>
                        <PieCharts />
                    </Router>
                    <Router path="/registartion">
                        <Signup loggedIn={setLoggedIn} />
                    </Router>
                    <Route path="/login">
                        <Login loggedIn={setLoggedIn} />
                    </Route>
                    <Route path="/user">
                        <User />
                    </Route>
                    <Route path="/forgot-password">
                        <ForgotPassword />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
