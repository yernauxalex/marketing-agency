import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';

function Home() {
    return (
        <>
            <Container fluid className="px-5">
                <h1>Choose Soap Agency as your digital marketing agency</h1>
            </Container>
            <Button variant="outline-primary" className="mx-5">Get in touch 👋</Button>
            <Container fluid className="my-5 mx-2">
                <Row className="justify-content-md-around">
                    <Col md="auto">
                        <img src="https://picsum.photos/seed/book/225/400" alt="random image 1" width="225" height="400" className="img-rounded img-top" />
                    </Col>
                    <Col md="auto">
                        <img src="https://picsum.photos/seed/files/225/400" alt="random image 2" width="225" height="400" className="img-rounded img-bottom" />
                    </Col>
                    <Col md="auto">
                        <img src="https://picsum.photos/seed/pen/225/400" alt="random image 3" width="225" height="400" className="img-rounded img-top" />
                    </Col>
                    <Col md="auto">
                        <img src="https://picsum.photos/seed/laptop/225/400" alt="random image 4" width="225" height="400" className="img-rounded img-bottom" />
                    </Col>
                </Row>
            </Container>
            <Container fluid className="px-5">
                <h2>We are the best choice for your Digital Marketing</h2>
                <Container className="mt-5 d-flex flex-wrap justify-content-around align-items-start">
                    <Card style={{ width: '16rem' }}>
                        <img src="https://picsum.photos/seed/icon1/30" alt="icon" width="30" height="30" className="img-rounded" />
                        <Card.Title>Earning traffic</Card.Title>
                        <Card.Text>A website without traffic is worthless. Our marketers partner with you to identify
                            your target market and get to work making your site more visible to your key market
                            through our comprehensive digital marketing services.
                        </Card.Text>
                        <Card.Link href="#">Learn more</Card.Link>
                    </Card>
                    <Card style={{ width: '16rem' }}>
                        <img src="https://picsum.photos/seed/icon2/30" alt="icon" width="30" height="30" className="img-rounded" />
                        <Card.Title>Earning traffic</Card.Title>
                        <Card.Text>A website without traffic is worthless. Our marketers partner with you to identify
                            your target market and get to work making your site more visible to your key market
                            through our comprehensive digital marketing services.
                        </Card.Text>
                        <Card.Link href="#">Learn more</Card.Link>
                    </Card>
                    <Card style={{ width: '16rem' }}>
                        <img src="https://picsum.photos/seed/icon3/30" alt="icon" width="30" height="30" className="img-rounded" />
                        <Card.Title>Earning traffic</Card.Title>
                        <Card.Text>A website without traffic is worthless. Our marketers partner with you to identify
                            your target market and get to work making your site more visible to your key market
                            through our comprehensive digital marketing services.
                        </Card.Text>
                        <Card.Link href="#">Learn more</Card.Link>
                    </Card>
                    {/* maybe card instead of row/col container */}
                </Container>
            </Container>
            <Container fluid className="bg-light" style={{ height: 300 }}>
                {/* Banner with partner */}
                <Row>
                    <Col>
                        <h2>Over 700+ partner</h2>
                    </Col>
                    <Col>
                        <text>grid of logo as a component</text>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="bg-light" style={{ height: 500 }}>
                <Row>
                    <Col>
                        <text>IMAGE</text>
                    </Col>
                    <Col>
                        <text> list or card how we creates growth buisiness</text>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <text>proven performance</text>
                    </Col>
                    <Col>
                        <text>unparealleled track record</text>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="bg-light" style={{ height: 400 }}>
                <text>STATS with graph</text>
            </Container>
            <Container fluid className="bg-light" style={{ height: 300 }}>
                <text>Form to contact us</text>
            </Container>
        </>
    );
}
export default Home;