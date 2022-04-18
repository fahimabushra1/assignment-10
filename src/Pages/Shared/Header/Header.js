import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";


const Header = () => {
    return (
        <div className="mx-5">
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="muted" variant="success">
                <Container>
                    <Navbar.Brand href="/home">Sundarban Parjatan</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="home#services">Services</Nav.Link>
                        <Nav.Link href="home#reviews">Reviews</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )

}

export default Header;