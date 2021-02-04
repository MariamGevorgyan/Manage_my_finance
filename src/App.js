import './App.css'
import Header from './components/Header'
import Login from './components/registartion/Login'
import LinerChart from './components/charts/linerChart'
import PieChart from './components/charts/pieChart'
import PieCharts from './components/Rotation/PieCharts'
import Cards from './components/Rotation/Cards'
import Signup from './components/registartion/Signup'
import { Container } from 'react-bootstrap'
import AuthProvider from './components/registartion/context/AuthContext'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

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
                        <AuthProvider>
                            <Signup />
                        </AuthProvider>
                    </Route>
                    <Router path="/login">
                        <AuthProvider>
                            <Login />
                        </AuthProvider>
                    </Router>
                </Switch>
            </Router>
        </div>
    )
}

export default App
