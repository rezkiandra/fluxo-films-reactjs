import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Home } from "../pages/Home"
import { About } from "../pages/About"
import { Service } from "../pages/Service"
import { Project } from "../pages/Project"
import { Contact } from "../pages/Contact"

import {
    BrowserRouter,
    Link,
    Routes,
    Route,
} from "react-router-dom";

export const Navigation = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                    <Container className="d-flex justify-content-between align-items-center">
                        <Navbar.Brand as={Link} to="/" className="text-uppercase">Portfolio</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link as={Link} to="/about" className="text-uppercase">About</Nav.Link>
                                <Nav.Link as={Link} to="/service" className="text-uppercase">Service</Nav.Link>
                                <Nav.Link as={Link} to="/project" className="text-uppercase">Project</Nav.Link>
                                <Nav.Link as={Link} to="/contact" className="text-uppercase">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/service" element={<Service />}></Route>
                    <Route path="/project" element={<Project />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}