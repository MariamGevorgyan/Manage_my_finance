import './App.css'
import Header from './components/Header'
import Login from './components/registartion/Login'
import LinerChart from './components/charts/linerChart'
import PieCharts from './components/Rotation/PieCharts'
import Cards from './components/Rotation/Cards'
import Signup from './components/registartion/Signup'
import User from './components/Rotation/User'

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
                    <Route path="/registartion" component={<Signup />} />
                    <Router path="/login" component={<Login />} />
                    <Router path="/user" component={<User />} />
                    <Router path="/forgot-password" component={<User />} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
