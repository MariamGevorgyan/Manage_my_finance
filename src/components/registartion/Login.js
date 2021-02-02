import { Form, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
            <Card>
                <Card.Body>
                    <Form>
                        <h2 className="text-center mb-4">Sign up</h2>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" required></Form.Control>
                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                required
                            ></Form.Control>
                        </Form.Group>

                        <Button
                            className="w-100 btn loginBtn signup"
                            type="sumit"
                        >
                            LOG IN
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}
