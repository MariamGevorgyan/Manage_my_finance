import './App.css'
import Header from './components/Header'
import LinerChart from './components/charts/linerChart'
import PieChart from './components/charts/pieChart'
import Cart from './components/card/Cart'
import SignIn from './components/registartion/SignIn'
import { Container } from 'react-bootstrap'
import AuthProvider from './components/registartion/context/AuthContext'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useParams,
    useRouteMatch,
} from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <div className="linerChart">
                            <div className="cart-container">
                                <Cart />
                                <Cart />
                                <Cart />
                            </div>
                            <div className="linerChart-container">
                                <LinerChart />
                            </div>
                        </div>

                        <div className="pieChart">
                            <PieChart />
                            <PieChart />
                        </div>
                    </Route>
                    <Route path="/registartion">
                        <AuthProvider>
                            <Container
                                className="d-flex align-items-center justify-content-center"
                                style={{ minHeight: '100vh' }}
                            >
                                <div
                                    className="w-100"
                                    style={{ maxWidth: '400px' }}
                                >
                                    <SignIn />
                                </div>
                            </Container>
                        </AuthProvider>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
