import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';

function Home() {
    return (
        <Container fluid="xl" >
            <Container fluid className="px-5">
                <h1>Choose Soap Agency as your digital marketing agency</h1>
            </Container>
            <Button variant="primary" className="mx-5">Get in touch 👋</Button>
            <Container fluid className="my-5">
                <Row className="d-flex justify-content-evenly flex-lg-nowrap">
                    <Col xs="auto">
                        <img src="https://picsum.photos/seed/book/225/400" alt="random image 1" width="225" height="400" className="img-rounded img-top img-responsive" />
                    </Col>
                    <Col xs="auto">
                        <img src="https://picsum.photos/seed/files/225/400" alt="random image 2" width="225" height="400" className="img-rounded img-bottom img-responsive" />
                    </Col>
                    <Col xs="auto" className="d-none d-sm-none d-md-block">
                        <img src="https://picsum.photos/seed/pen/225/400" alt="random image 3" width="225" height="400" className="img-rounded img-top img-responsive" />
                    </Col>
                    <Col xs="auto" className="d-none d-sm-none d-md-none d-lg-block">
                        <img src="https://picsum.photos/seed/laptop/225/400" alt="random image 4" width="225" height="400" className="img-rounded img-bottom img-responsive" />
                    </Col>
                </Row>
            </Container>
            <Container fluid className="px-5">
                <h2>We are the best choice for your Digital Marketing</h2>
                <Container className="mt-5 d-flex flex-wrap justify-content-evenly align-items-start gap-3">
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
            <Container className="bg-light px-5 mt-5 div-rounded">
                {/* Banner with partner */}
                <Row className="py-3">
                    <Col className="d-flex align-items-center justify-content-center">
                        <h4>Over 700+ partner</h4>
                    </Col>
                    <Col className="my-auto">
                        <Col className="my-2 d-flex justify-content-evenly">
                            <img src="https://picsum.photos/seed/icon1/50" alt="icon" width="50" height="50" className="img-rounded" />
                            <img src="https://picsum.photos/seed/icon2/50" alt="icon" width="50" height="50" className="img-rounded" />
                            <img src="https://picsum.photos/seed/icon3/50" alt="icon" width="50" height="50" className="img-rounded" />
                            <img src="https://picsum.photos/seed/icon4/50" alt="icon" width="50" height="50" className="img-rounded" />
                            <img src="https://picsum.photos/seed/icon5/50" alt="icon" width="50" height="50" className="img-rounded" />
                        </Col>
                        <Col className="my-2 d-flex justify-content-evenly">
                            <img src="https://picsum.photos/seed/icon6/50" alt="icon" width="50" height="50" className="img-rounded" />
                            <img src="https://picsum.photos/seed/icon7/50" alt="icon" width="50" height="50" className="img-rounded" />
                            <img src="https://picsum.photos/seed/icon8/50" alt="icon" width="50" height="50" className="img-rounded" />
                            <img src="https://picsum.photos/seed/icon9/50" alt="icon" width="50" height="50" className="img-rounded" />
                            <img src="https://picsum.photos/seed/icon10/50" alt="icon" width="50" height="50" className="img-rounded" />
                        </Col>
                        <Col className="my-2 d-flex justify-content-evenly">
                            <img src="https://picsum.photos/seed/icon11/50" alt="icon" width="50" height="50" className="img-rounded" />
                            <img src="https://picsum.photos/seed/icon12/50" alt="icon" width="50" height="50" className="img-rounded" />
                            <img src="https://picsum.photos/seed/icon13/50" alt="icon" width="50" height="50" className="img-rounded" />
                            <img src="https://picsum.photos/seed/icon14/50" alt="icon" width="50" height="50" className="img-rounded" />
                            <img src="https://picsum.photos/seed/icon15/50" alt="icon" width="50" height="50" className="img-rounded" />
                        </Col>
                    </Col>
                </Row>
            </Container>
            <Container className="bg-light px-5 mt-5 div-rounded">
                <Row>
                    <Col className="my-3 d-flex justify-content-center">
                        <img src="https://picsum.photos/seed/meeting/375" alt="illustration image" width="375" height="375" className="img-rounded" />
                    </Col>
                    <Col>
                        <h2>How Soap Agency creates growth business</h2>
                        <ul>
                            <li>Dedicated account manager for each account</li>
                            <li>Clear and concise reporting platform</li>
                            <li>Partner status with Google, Facebook, Bing and more</li>
                            <li>On-staff experts in marketing, design, automation, and developpement</li>
                        </ul>
                        <Button variant="primary" className="mx-5">Send me a proposal 📄</Button>
                    </Col>
                </Row>
                <Row className="py-3 d-flex justify-content-evenly">
                    <Card bg="light" border="light" style={{ width: '28rem' }}>
                        <img src="https://picsum.photos/seed/icon3/30" alt="icon" width="30" height="30" className="img-rounded" />
                        <Card.Title>Earning traffic</Card.Title>
                        <Card.Text>A website without traffic is worthless. Our marketers partner with you to identify
                            your target market and get to work making your site more visible to your key market
                            through our comprehensive digital marketing services.
                        </Card.Text>
                        <Card.Link href="#">Learn more</Card.Link>
                    </Card>
                    <Card bg="light" border="light" style={{ width: '28rem' }}>
                        <img src="https://picsum.photos/seed/icon3/30" alt="icon" width="30" height="30" className="img-rounded" />
                        <Card.Title>Earning traffic</Card.Title>
                        <Card.Text>A website without traffic is worthless. Our marketers partner with you to identify
                            your target market and get to work making your site more visible to your key market
                            through our comprehensive digital marketing services.
                        </Card.Text>
                        <Card.Link href="#">Learn more</Card.Link>
                    </Card>
                </Row>
            </Container>
            <Container fluid className="bg-light px-5 mt-5" style={{ height: 400 }}>
                <text>STATS with graph</text>
            </Container>
            <Container fluid className="bg-light px-5 mt-5" style={{ height: 300 }}>
                <text>Form to contact us</text>
            </Container>
        </Container>
    );
}
export default Home;