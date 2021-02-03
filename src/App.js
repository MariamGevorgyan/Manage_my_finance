import './App.css'
import Header from './components/Header'
import Login from './components/registartion/Login'
import LinerChart from './components/charts/linerChart'
import PieChart from './components/charts/pieChart'
import Cart from './components/card/Cart'
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
                            <div className="cart-container">
                                <Cart
                                    money="1000$"
                                    type="Balanse"
                                    icon="https://www.flaticon.com/svg/vstatic/svg/584/584026.svg?token=exp=1612339960~hmac=796198bd81a390fbc1f460472324b753"
                                />
                                <Cart
                                    font_color="red"
                                    money="2000$"
                                    type="Expenses"
                                    icon="https://www.flaticon.com/svg/vstatic/svg/2867/2867713.svg?token=exp=1612339999~hmac=8a3fac76fdce4b98b363419ddb031977"
                                />
                                <Cart
                                    font_color="green"
                                    money="3000$"
                                    type="Income"
                                    icon="https://www.flaticon.com/svg/vstatic/svg/3135/3135706.svg?token=exp=1612340102~hmac=eaf1c236e1ae7a29475e8dd6a1eedce3"
                                />
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
                                    <Signup />
                                </div>
                            </Container>
                        </AuthProvider>
                    </Route>
                    <Router path="/login">
                        <AuthProvider>
                            <Container
                                className="d-flex align-items-center justify-content-center"
                                style={{ minHeight: '100vh' }}
                            >
                                <div
                                    className="w-100"
                                    style={{ maxWidth: '400px' }}
                                >
                                    <Login />
                                </div>
                            </Container>
                        </AuthProvider>
                    </Router>
                </Switch>
            </Router>
        </div>
    )
}

export default App
