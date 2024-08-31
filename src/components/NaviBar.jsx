import { useState } from "react";
import { Button, Container, Nav, Navbar, Modal, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NaviBar() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [toggle, setToggle] = useState(false);
    const handleToggle = (state) => setToggle(state);

    return (
        <>
            <Navbar expand="md" bg="dark" variant="dark" collapseOnSelect onToggle={handleToggle}>
                <Container>
                    <Navbar.Brand>Alpine Blog</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link eventKey="i" as={NavLink} to="/">Home</Nav.Link>
                            <Nav.Link eventKey="i" as={NavLink} to="/users">Users</Nav.Link>
                            <Nav.Link eventKey="i" as={NavLink} to="/about">About</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Item>
                                <Nav.Link className={`p-0 me-2 ${toggle ? "pb-2" : ""}`} eventKey="i">
                                    <Button onClick={handleShow}>Log in</Button>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="p-0" eventKey="i">
                                    <Button onClick={handleShow}>Register</Button>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Log In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="userFormEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                            <Form.Text>We'll never share your email with anyone else.</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="userFormPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                        <Form.Group controlId="userFormCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleClose}>OK</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}