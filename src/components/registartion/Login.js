import { Form, Button, Card } from 'react-bootstrap'
import './login.css'
import { useRef } from 'react'
import { useAuth } from './context/AuthContext'
import * as EmailValidator from 'email-validator'
import { Link, useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'

import './login.css'

export default function Login(props) {
    const emailRef = useRef()
    const passwordRef = useRef()

    const history = useHistory()

    const { login } = useAuth()

    function userMessage(icon, title) {
        return Swal.fire({
            position: 'top-center',
            icon,
            title,
            showConfirmButton: false,
            timer: 2500,
        })
    }
    async function handleSumbit(e) {
        e.preventDefault()

        if (!EmailValidator.validate(emailRef.current.value)) {
            return userMessage('error', 'Invalid Email Address:')
        }

        try {
            await login(emailRef.current.value, passwordRef.current.value)
            userMessage('success', 'success')
            return history.push('/')
        } catch {
            return userMessage('error', 'Somethin went wrong')
        }
    }

    return (
        <>
            <Card>
                <Card.Body className="cardBody">
                    <Form>
                        <h2 className="text-center mb-4">Sign up</h2>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                ref={emailRef}
                                required
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                ref={passwordRef}
                                required
                            ></Form.Control>
                        </Form.Group>

                        <Button
                            onClick={handleSumbit}
                            className="w-100 btn loginBtn signup"
                            type="sumit"
                        >
                            Sing up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}
