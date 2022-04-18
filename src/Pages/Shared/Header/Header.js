import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";


const Header = () => {
    return (
        <div className="mx-5">
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="muted" variant="success">
                <Container>
                    <Navbar.Brand to="/">Sundarban Parjatan</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link to="/">Home</Nav.Link>
                        <Nav.Link to="#services">Services</Nav.Link>
                        <Nav.Link to="#">Services</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )

}

export default Header;