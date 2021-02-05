import { Form, Button, Card } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import './login.css'
import { useRef } from 'react'
import { auth } from './firebase'
import * as EmailValidator from 'email-validator'
import { Link, useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'

import './login.css'

export default function Signup(props) {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const history = useHistory()
    // const { signup, currentUser } = useAuth()

    function userMessage(icon, title) {
        return Swal.fire({
            position: 'top-center',
            icon,
            title,
            showConfirmButton: false,
            timer: 2500,
        })
    }

    function signup(email, password) {
        auth.createUserWithEmailAndPassword(email, password)
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
            userMessage('success', 'success')
            return history.push('/user')
        } catch {
            return userMessage(
                'error',
                'The email address is already in use by another account.'
            )
        }
    }

    return (
        <>
            <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: '100vh' }}
                id="bolola"
            >
                <div className="w-100" style={{ maxWidth: '400px' }}>
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
                                <Form.Group id="password-confirm">
                                    <Form.Label>
                                        Password Confirmation
                                    </Form.Label>
                                    <Form.Control
                                        type="password"
                                        ref={passwordConfirmRef}
                                        required
                                    ></Form.Control>
                                </Form.Group>
                                <Button
                                    onClick={handleSumbit}
                                    className="w-100 btn loginBtn signup"
                                    type="sumit"
                                >
                                    Login
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </>
    )
}
