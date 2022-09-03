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
            <Container fluid className="bg-light px-5 mt-5 div-rounded">
                <Row className="py-3">
                    <Col>
                        <h5>By the numbers</h5>
                        <h4 style={{ fontSize: 120, fontWeight: 'bold' }}>92%</h4>
                        <p style={{ fontWeight: 'bold' }}>Retention rate</p>
                        <p>Your business is in good hands at Soap Agency. While the average retention rate for marketing agencies hovers around 50%,
                            over 90% of our clients stay with us over the long haul because of the results we deliver and the relationships we build.</p>
                    </Col>
                    <Col>
                        <p>Our best-in-class digital marketing agency impress customers with impactful results and wows them with stellar customer service.</p>
                        <img src="https://picsum.photos/seed/chart/500/300" alt="graph" width="500" height="300" />
                        {/* <Row className="p-0 " style={{ height: 200 }}>
                            <Col className="p-0" style={{ witdh: 80 }}>
                                <div className="h-64 d-inline-block chart" style={{ width: 80, backgroundColor: '#ff0000' }}>Height 25%</div>
                            </Col>
                            <Col className="p-0 w-80" style={{ witdh: 80 }}>
                                <div className="h-30 d-inline-block chart" style={{ width: 80, backgroundColor: '#ff0000' }}>Height 50%</div>
                            </Col>
                            <Col className="p-0 w-80">
                                <div className="h-75 d-inline-block chart" style={{ width: 80, backgroundColor: '#ff0000' }}>Height 75%</div>
                            </Col>
                            <Col className="p-0 w-80">
                                <div className="h-22 d-inline-block chart" style={{ width: 80, backgroundColor: '#ff0000' }}>Height 100%</div>
                            </Col>
                        </Row> */}
                    </Col>
                </Row>
            </Container>
            <Container fluid className="bg-light px-5 my-5 div-rounded">
                <Row className="py-3">
                    <Col>
                        <h5>Ready to grow with a digital marketing agency you can trust ?
                            Get your proposal now!
                        </h5>
                    </Col>
                    <Col>
                        <p>Our digital marketing experts have put together thousands of succesful digital marketing campaigns for businesses looking
                            to increase leads, phone calls, transactions, and qualified website traffic. They will do the same for you, request a free
                            strategy proposal and get a game plan for elite revenue.
                        </p>
                        <Button variant="primary" >Send me a proposal 📄</Button>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home;