import { Container, Image, Form, Col, FormCheck } from "react-bootstrap";
import '../style/index.scss';
import bg from '../../../images/bann.jpg';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <Container fluid>
            <Image src={bg} fluid className="login-screen__bg" />
            <div className="fixed-top fixed-bottom d-flex align-items-center">
                <Form className="login-screen__form">
                    <Form.Text className="login-screen__form-title">
                        Đăng nhập
                    </Form.Text>
                    <Form.Row>
                        <Form.Group as={Col} className="d-flex align-items-center mb-4">
                            <Form.Control bsPrefix="login-screen__form-control"
                                placeholder="Username" required />
                            <div className="login-screen__form-append">
                                <i className="fas fa-user"></i>
                            </div>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} className="d-flex align-items-center">
                            <Form.Control bsPrefix="login-screen__form-control"
                                placeholder="Password" required />
                            <div className="login-screen__form-append">
                                <i className="fas fa-unlock-alt"></i>
                            </div>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}
                            className="d-flex align-items-center justify-content-between">
                            <FormCheck className="pl-0 mt-2 d-flex align-items-center">
                                <FormCheck.Input bsPrefix="login-screen__form-check"
                                    id="login-screen-form-check" type="checkbox" />
                                <FormCheck.Label htmlFor="login-screen-form-check"
                                    className="text-white">Remember Me</FormCheck.Label>
                            </FormCheck>
                            <Link className="text-white mt-2 text-decoration-none"
                                to="/forgot-password">Forgot Password</Link>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} className="d-flex align-items-center">
                            <Form.Control bsPrefix="login-screen__form-submit"
                                value="Login" type="submit" />
                        </Form.Group>
                    </Form.Row>
                </Form>
            </div>
        </Container>
    )
}

export default Login;