import React from "react"
import PercyImage from "../assets/images/percy.jpg"
import MortalImage from "../assets/images/mortal.jpg"
import SpiderImage from "../assets/images/spiderman.jpg"
import AvengerImage from "../assets/images/endgame.jpg"

import { Container, Card, Col } from "react-bootstrap";

export const Film = () => {
    return (
        <>
            <Container className="d-lg-flex justify-content-center align-items-center gap-4">
                <Col className="col-lg-3">
                    <Card className="my-5">
                        <Card.Img className="img-fluid" variant="top" src={PercyImage} />
                        <Card.Body>
                            <Card.Title className="text-center text-uppercase">Percy Jackson</Card.Title>
                            <Card.Text className="text-center text-capitalize">a Mediterranean complexion, and sea-green eyes like his father Poseidon
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-lg-3">
                    <Card className="my-3">
                        <Card.Img className="img-fluid" variant="top" src={SpiderImage} />
                        <Card.Body>
                            <Card.Title className="text-center text-uppercase">Spiderman: No Way Home</Card.Title>
                            <Card.Text className="text-center text-capitalize">a poor sickly orphan, is bitten by a radioactive spider
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-lg-3">
                    <Card className="my-5">
                        <Card.Img className="img-fluid" variant="top" src={MortalImage} />
                        <Card.Body>
                            <Card.Title className="text-center text-uppercase">Mortal Kombat</Card.Title>
                            <Card.Text className="text-center text-capitalize">a washed-up mixed martial arts fighter who is unaware of his hidden lineage.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-lg-3">
                    <Card className="my-3">
                        <Card.Img className="img-fluid" variant="top" src={AvengerImage} />
                        <Card.Body>
                            <Card.Title className="text-center text-uppercase">Avengers: End Game</Card.Title>
                            <Card.Text className="text-center text-capitalize">A American superhero film based on the Marvel Comics
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        </>
    )
}