import React from "react";
import "../../App.css"
import { Container, Button } from "react-bootstrap";

export const Home = () => {
    return (
        <>
            <Container className="d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-uppercase text-light">Welcome to Our Cinema</h1>
                <h1 className="text-light mb-4">FLUXO Films</h1>
                <h2 className="text-light">Choose your movie to watch</h2>
                <p className="text-light text-center">We provides all genre movies from Sci-Fi, Action, Horror, Romance, Thriller, and etc</p>
                <Button type="button" className="text-uppercase px-3 rounded shadow btn-outline-light" variant="dark">See List Films</Button>
            </Container>
        </>
    )
}