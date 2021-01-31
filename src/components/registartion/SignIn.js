import { Form, Button, Card } from 'react-bootstrap'
import { useRef } from 'react'
import { useAuth } from './context/AuthContext'
import './login.css'

export default function SignIn(props) {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()

    function handleSumbit(e) {
        e.preventDefault()
        signup(emailRef.current.value, passwordRef.current.value)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <Form>
                        <h2 className="text-center mb-4">Sign in</h2>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                ref={emailRef}
                                required
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group id="email">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                ref={passwordRef}
                                required
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control
                                type="password"
                                ref={passwordConfirmRef}
                                required
                            ></Form.Control>
                        </Form.Group>
                        <Button
                            onClick={handleSumbit}
                            className="w-100 btn loginBtn"
                            type="sumit"
                        >
                            Sing in
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Do you havn't account ? Sign in
            </div>
        </>
    )
}
