import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import fonts from "../styles/fonts";

function Header() {
    return (
        <>
            <Navbar className="mx-5" expand="lg" id="home">
                <Navbar.Brand href="#home" style={{ fontSize: fonts.header.title, fontWeight: 'bold' }}>
                    <img src="https://picsum.photos/30" alt="logo" width="30" height="30" className="d-inline-block align-top" />
                    {' '}
                    Soap Agency
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-center">
                    <Navbar.Text style={{ fontSize: fonts.header.text }}>
                        <Nav fill variant="pills" defaultActiveKey="/home">
                            <Nav.Item className="mx-1">
                                <Nav.Link href="#home">What we do</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mx-1">
                                <Nav.Link href="#ourWork">Our work</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mx-1">
                                <Nav.Link href="#WhoWeAre">Who we are</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mx-1">
                                <Nav.Link eventKey="blog">Blog</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Text>
                </Navbar.Collapse>
                <Button variant="outline-primary" style={{ fontSize: fonts.header.button }}>Get in touch 👋</Button>
            </Navbar>
        </>
    );
}
export default Header;
