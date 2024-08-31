import { Button, Card, Col, Container, Row } from "react-bootstrap";
import hill from '../hill.jpg';

export default function Cards() {
    return (
        <Container>
            <Row className="pt-4 justify-content-center">
                <Col lg={3} xs={6}>
                    <Card className="mb-4" style={{maxWidth: "18rem"}}>
                        <Card.Img variant="top" src={hill} />
                        <Card.Body>
                            <Card.Title>Austria</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Card.Text>
                            <Button>Go there</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} xs={6}>
                    <Card className="mb-4" style={{maxWidth: "18rem"}}>
                        <Card.Img variant="top" src={hill} />
                        <Card.Body>
                            <Card.Title>Italy</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Card.Text>
                            <Button>Go there</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} xs={6}>
                    <Card className="mb-4" style={{maxWidth: "18rem"}}>
                        <Card.Img variant="top" src={hill} />
                        <Card.Body>
                            <Card.Title>Switzerland</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Card.Text>
                            <Button>Go there</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} xs={6}>
                    <Card className="mb-4" style={{maxWidth: "18rem"}}>
                        <Card.Img variant="top" src={hill} />
                        <Card.Body>
                            <Card.Title>France</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Card.Text>
                            <Button>Go there</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}