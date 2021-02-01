import { Form, Button, Card } from 'react-bootstrap'
import { useRef } from 'react'
import { useAuth } from './context/AuthContext'
import * as EmailValidator from 'email-validator'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

import './login.css'

export default function SignIn(props) {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    function userMessage(icon, title) {
        return Swal.fire({
            position: 'top-end',
            icon,
            title,
            showConfirmButton: false,
            timer: 1500,
        })
    }
    async function handleSumbit(e) {
        e.preventDefault()

        if (!EmailValidator.validate(emailRef.current.value)) {
            return userMessage('error', 'Invalid Email Address:')
        }

        if (!(passwordRef.current.value === passwordConfirmRef.current.value)) {
            return userMessage('error', 'Password do not much')
        }
        if (
            passwordRef.current.value.length < 6 ||
            passwordConfirmRef.current.value < 6
        ) {
            return userMessage(
                'error',
                'Password should be minimum 6 characters'
            )
        }
        try {
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            return userMessage(
                'error',
                'The email address is already in use by another account.'
            )
        }

        signup(emailRef.current.value, passwordRef.current.value)
        return userMessage('success', 'success')
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
                Do you havn't account ?<Link to="/login"> Sign up</Link>
            </div>
        </>
    )
}
