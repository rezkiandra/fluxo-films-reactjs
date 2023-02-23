import React from "react"
import DuneImage from "../assets/images/dune.jpg"
import AvatarImage from "../assets/images/avatar.jpg"
import JokerImage from "../assets/images/joker.jpg"

import { Container, Card, Col } from "react-bootstrap";

export const Film = () => {
    return (
        <>
            <Container>
                <div className="d-lg-flex justify-content-center align-items-center gap-5">
                    <Col className="col-lg-3">
                        <Card>
                            <Card.Img className="img-fluid" variant="top" src={DuneImage} />
                            <Card.Body>
                                <Card.Title className="text-center text-uppercase">Dune</Card.Title>
                                <Card.Text className="text-center text-capitalize">A mythic and emotionally charged hero's journey
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-lg-3">
                        <Card>
                            <Card.Img className="img-fluid" variant="top" src={AvatarImage} />
                            <Card.Body>
                                <Card.Title className="text-center text-uppercase">Avatar: The Way Of Water</Card.Title>
                                <Card.Text className="text-center text-capitalize">a journey to the wondrous world of Pandora
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-lg-3">
                        <Card>
                            <Card.Img className="img-fluid" variant="top" src={JokerImage} />
                            <Card.Body>
                                <Card.Title className="text-center text-uppercase">Joker</Card.Title>
                                <Card.Text className="text-center text-capitalize">a twisted descent into insanity that follows Arthur
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
                <div className="d-lg-flex justify-content-center align-items-center gap-5">
                    <Col className="col-lg-3">
                        <Card className="my-5">
                            <Card.Img className="img-fluid" variant="top" src={DuneImage} />
                            <Card.Body>
                                <Card.Title className="text-center text-uppercase">Dune</Card.Title>
                                <Card.Text className="text-center text-capitalize">A mythic and emotionally charged hero's journey
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-lg-3">
                        <Card className="my-5">
                            <Card.Img className="img-fluid" variant="top" src={AvatarImage} />
                            <Card.Body>
                                <Card.Title className="text-center text-uppercase">Avatar: The Way Of Water</Card.Title>
                                <Card.Text className="text-center text-capitalize">a journey to the wondrous world of Pandora
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-lg-3">
                        <Card className="my-5">
                            <Card.Img className="img-fluid" variant="top" src={JokerImage} />
                            <Card.Body>
                                <Card.Title className="text-center text-uppercase">Joker</Card.Title>
                                <Card.Text className="text-center text-capitalize">a twisted descent into insanity that follows Arthur
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
            </Container>
        </>
    )
}