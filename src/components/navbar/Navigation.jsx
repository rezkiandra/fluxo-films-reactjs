import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Home } from "../pages/Home"
import { About } from "../pages/About"
import { Trending } from "../pages/Trending"
import { Detail } from "../pages/Detail"
import { Upcoming } from "../pages/Upcoming"

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
                <Navbar variant="dark" expand="lg" fixed="top">
                    <Container className="d-flex justify-content-between align-items-center">
                        <Navbar.Brand as={Link} to="/">FLUXO Films</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link as={Link} to="/about" className="text-uppercase">About</Nav.Link>
                                <Nav.Link as={Link} to="/trending" className="text-uppercase">Trending</Nav.Link>
                                <Nav.Link as={Link} to="/upcoming" className="text-uppercase">Upcoming</Nav.Link>
                                <Nav.Link as={Link} to="/detail" className="text-uppercase">detail</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/trending" element={<Trending />}></Route>
                    <Route path="/upcoming" element={<Upcoming />}></Route>
                    <Route path="/detail" element={<Detail />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}