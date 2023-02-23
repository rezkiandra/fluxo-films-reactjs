import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Home } from "../pages/Home"
import { About } from "../pages/About"
import { Film } from "../pages/Film"
import { Trending } from "../pages/Trending"
import { Upcoming } from "../pages/Upcoming"
import { Detail } from "../pages/Detail"

import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route,
} from "react-router-dom";

export const Navigation = () => {
    return (
        <>
            <Router>
                <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                    <Container className="d-flex justify-content-between align-items-center">
                        <Navbar.Brand as={Link} to="/">FLUXO Films</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link as={Link} to="/about" className="text-uppercase">About</Nav.Link>
                                <Nav.Link as={Link} to="/film" className="text-uppercase">Film</Nav.Link>
                                <Nav.Link as={Link} to="/trending" className="text-uppercase">Trending</Nav.Link>
                                <Nav.Link as={Link} to="/upcoming" className="text-uppercase">Upcoming</Nav.Link>
                                <Nav.Link as={Link} to="/detail" className="text-uppercase">Detail</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/film" element={<Film />}></Route>
                    <Route path="/trending" element={<Trending />}></Route>
                    <Route path="/upcoming" element={<Upcoming />}></Route>
                    <Route path="/detail" element={<Detail />}></Route>
                </Routes>
            </Router>
        </>
    )
}