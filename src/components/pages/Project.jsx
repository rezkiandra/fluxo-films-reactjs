import React from "react";
import "../../App.css"
import CardImage from "../../assets/images/programming.jpg"

import { Container, Card, Col } from "react-bootstrap";

export const Project = () => {
    return (
        <>
            <Container className="d-lg-flex justify-content-center align-items-center gap-3" id="home">
                <Col className="col-lg-3">
                    <Card className="my-3">
                        <Card.Img variant="top" src={CardImage} />
                        <Card.Body>
                            <Card.Title>Raven</Card.Title>
                            <Card.Text>
                                Raven is 2nd Job in Assassin Class
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-lg-3">
                    <Card className="my-3">
                        <Card.Img variant="top" src={CardImage} />
                        <Card.Body>
                            <Card.Title>Ripper</Card.Title>
                            <Card.Text>
                                Ripper is 2nd Job in Assassin Class
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-lg-3">
                    <Card className="my-3">
                        <Card.Img variant="top" src={CardImage} />
                        <Card.Body>
                            <Card.Title>Light Fury</Card.Title>
                            <Card.Text>
                                Light Fury is 2nd Job in Assassin Class
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-lg-3">
                    <Card className="my-3">
                        <Card.Img variant="top" src={CardImage} />
                        <Card.Body>
                            <Card.Title>Abyss Walker</Card.Title>
                            <Card.Text>
                                Abyss Walker is 2nd Job in Assassin Class
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        </>
    )
}