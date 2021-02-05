import './App.css'
import Header from './components/Header'
import Login from './components/registartion/Login'
import LinerChart from './components/charts/linerChart'
import PieCharts from './components/Rotation/PieCharts'
import Cards from './components/Rotation/Cards'
import Signup from './components/registartion/Signup'
import User from './components/Rotation/User'
import ForgotPassword from './components/registartion/ForgotPassword'

import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
} from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <div className="linerChart">
                            <Cards />
                            <LinerChart />
                        </div>
                        <PieCharts />
                    </Route>
                    <Route path="/registartion">
                        <Signup />
                    </Route>
                    <Route path="/login">
                        <Login />
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
