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
// import LeadingPage from './components/leadingPage_proto/LeadingPage'
import LeadingPage from './components/LeadingPage/LeadingPage'
import FindSaving from './components/findSaving/FindSaving'
import Profil from './components/profil/Profil'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
} from 'react-router-dom'

function App() {
    const [user, setUser] = useState(null)
    return (
        <div className="App">
            <Router>
                {user ? <Navbar /> : <Header />}

                <Switch>
                    <Route exact path="/">
                        {user ? (
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
                        <Signup user={setUser} />
                    </Router>
                    <Route path="/login">
                        <Login user={setUser} />
                    </Route>
                    <Route path="/user">
                        <User />
                    </Route>
                    <Route path="/profil">
                        <Profil />
                    </Route>
                    <Route path="/forgot-password">
                        <ForgotPassword />
                    </Route>
                    <Route path="/find-saving">
                        <FindSaving />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
