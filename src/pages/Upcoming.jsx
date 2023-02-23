import React from "react";
import MeganImage from "../assets/images/megan.jpg"
import ThorImage from "../assets/images/thor.jpg"
import DeathImage from "../assets/images/death.jpg"

import { Container, Card, Col } from "react-bootstrap";

export const Upcoming = () => {
    return (
        <div id="upcoming">
            <Container className="d-lg-flex justify-content-center align-items-center gap-5">
                <Col className="col-lg-3">
                    <Card className="my-5">
                        <Card.Img className="img-fluid" variant="top" src={ThorImage} />
                        <Card.Body>
                            <Card.Title className="text-center text-uppercase">Thor: Love and Thunder</Card.Title>
                            <Card.Text className="text-center text-capitalize">A Thunder God must return to action and recruit Valkyrie
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-lg-3">
                    <Card className="my-3">
                        <Card.Img className="img-fluid" variant="top" src={MeganImage} />
                        <Card.Body>
                            <Card.Title className="text-center text-uppercase">Megan</Card.Title>
                            <Card.Text className="text-center text-capitalize">a roboticist who works for a company that builds AI toys
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-lg-3">
                    <Card className="my-5">
                        <Card.Img className="img-fluid" variant="top" src={DeathImage} />
                        <Card.Body>
                            <Card.Title className="text-center text-uppercase">Out of Death</Card.Title>
                            <Card.Text className="text-center text-capitalize">A corrupt Sheriff's department in a rural mountain town comes undone.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        </div>
    )
}