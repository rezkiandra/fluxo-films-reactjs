import React from "react";

import { Button, Container } from "react-bootstrap";

export const About = () => {
    return (
        <>
            <Container className="d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-light mb-4">FLUXO Films</h2>
                <h4 className="text-light text-center text-capitalize">a website-based free movie viewing application platform</h4>
                <h4 className="text-light text-capitalize mb-4">developed by Rezkiandra</h4>
                <Button type="button" className="text-uppercase px-3 rounded shadow btn-outline-light" href="https://github.com/Rezkiandra" variant="dark">Follow Me</Button>
            </Container>
        </>
    )
}