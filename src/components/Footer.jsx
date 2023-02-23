import React from "react";
import { Container, Col } from "react-bootstrap";

export const Footer = () => {
    return (
        <div className="bg-dark">
            <Container className="text-light d-lg-flex justify-content-center align-items-center">
                <Col className="col-lg-7">
                    <h4>INFO</h4>
                    <p>info@gmail.com</p>
                    <p>Sambas, Kalimantan Barat</p>
                    <p>0895-3423-4393</p>
                </Col>
                <Col className="col-lg-3"></Col>
            </Container>
        </div>
    )
}