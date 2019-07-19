import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const navbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">MP's Builder</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav.Link href="#">Home</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default navbar;
