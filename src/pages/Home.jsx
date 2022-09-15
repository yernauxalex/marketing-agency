/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import picHome1 from '../assets/picHome1.jpg'
import picHome2 from '../assets/picHome2.jpg'
import picHome3 from '../assets/picHome3.jpg'
import picHome4 from '../assets/picHome4.jpg'
import picOurwork from '../assets/picOurwork.jpg'
import picGraph from '../assets/picGraph.jpg'

function Home() {
    return (
        <Container fluid="xl" >
            <Container fluid className="px-5">
                <h1>Choose Soap Agency as your digital marketing agency.</h1>
            </Container>
            <Button variant="primary" className="mx-5">Get in touch 👋</Button>
            <Container fluid className="my-5">
                <Row className="d-flex justify-content-evenly flex-lg-nowrap">
                    <Col xs="auto">
                        <img src={picHome1} alt="random image 1" width="224" height="400" className="img-rounded img-top img-responsive" />
                    </Col>
                    <Col xs="auto">
                        <img src={picHome2} alt="random image 2" width="224" height="400" className="img-rounded img-bottom img-responsive" />
                    </Col>
                    <Col xs="auto" className="d-none d-sm-none d-md-block">
                        <img src={picHome3} alt="random image 3" width="224" height="400" className="img-rounded img-top img-responsive" />
                    </Col>
                    <Col xs="auto" className="d-none d-sm-none d-md-none d-lg-block">
                        <img src={picHome4} alt="random image 4" width="225" height="400" className="img-rounded img-bottom img-responsive" />
                    </Col>
                </Row>
            </Container>
            <Container fluid className="px-5">
                <h2>We are the best choice for your Digital Marketing</h2>
                <Container className="mt-5 d-flex flex-wrap justify-content-evenly align-items-start gap-xs-3">
                    <Card border="light" style={{ width: '16rem' }}>
                        <img src="https://picsum.photos/seed/icon1/40" alt="icon" width="40" height="40" className="img-rounded" />
                        <Card.Title className="mt-2" style={{ fontWeight: 'bold' }}>Earning traffic</Card.Title>
                        <Card.Text>A website without traffic is worthless. Our marketers partner with you to identify
                            your target market and get to work making your site more visible to your key market
                            through our comprehensive digital marketing services.
                        </Card.Text>
                        <Card.Link href="#">Learn more</Card.Link>
                    </Card>
                    <Card border="light" style={{ width: '16rem' }}>
                        <img src="https://picsum.photos/seed/icon2/40" alt="icon" width="40" height="40" className="img-rounded" />
                        <Card.Title className="mt-2" style={{ fontWeight: 'bold' }}>Design that dazzles</Card.Title>
                        <Card.Text>Your business is unique and you need a website that can help separate you from the competition.
                            The Soap agency interactive team lays the creative groundwork for your digital presence with a
                            cutting-edge website design
                        </Card.Text>
                        <Card.Link href="#">Learn more</Card.Link>
                    </Card>
                    <Card border="light" style={{ width: '16rem' }}>
                        <img src="https://picsum.photos/seed/icon3/40" alt="icon" width="40" height="40" className="img-rounded" />
                        <Card.Title className="mt-2" style={{ fontWeight: 'bold' }}>Expand your social reach</Card.Title>
                        <Card.Text>Connectivity and online interaction are a must for any company focused on growth. Our team of social
                            media experts can create a social media management plan that gets the right message in front of your desired audience.
                        </Card.Text>
                        <Card.Link href="#">Learn more</Card.Link>
                    </Card>
                </Container>
            </Container>
            <Container className="bg-custom px-5 mt-5 div-rounded">
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
            <Container className="bg-custom p-5 mt-5 div-rounded" id="ourWork">
                <Row className="d-flex flex-md-column flex-lg-row">
                    <Col className="my-3 d-flex justify-content-center">
                        <img src={picOurwork} alt="illustration image" width="425" height="425" className="img-rounded" />
                    </Col>
                    <Col>
                        <h2>How Soap Agency creates growth business</h2>
                        <ul className='customList'>
                            <li className="mb-2">Dedicated account manager for each account</li>
                            <li className="mb-2">Clear and concise reporting platform</li>
                            <li className="mb-2">Partner status with Google, Facebook, Bing and more</li>
                            <li className="mb-2">On-staff experts in marketing, design, automation, and developpement</li>
                        </ul>
                        <Button variant="primary" className="mx-5">Send me a proposal 📄</Button>
                    </Col>
                </Row>
                <Row className="py-3 d-flex justify-content-evenly">
                    <Card className="bg-custom mt-4 mt-xl-0" style={{ width: '28rem' }}>
                        <img src="https://picsum.photos/seed/icon4/40" alt="icon" width="40" height="40" className="img-rounded" />
                        <Card.Title className="mt-2" style={{ fontWeight: 'bold' }}>Proven performance</Card.Title>
                        <Card.Text>Our team of over 450 experts is one of the largest performance digital marketing agencies in the workd.
                            We've partnered with the best to bring the greatest marketing technology to our clients.
                        </Card.Text>
                        <Card.Link href="#">Learn more</Card.Link>
                    </Card>
                    <Card className="bg-custom mt-4 mt-xl-0" style={{ width: '28rem' }}>
                        <img src="https://picsum.photos/seed/icon5/40" alt="icon" width="40" height="40" className="img-rounded" />
                        <Card.Title className="mt-2" style={{ fontWeight: 'bold' }}>Unparalleled track record</Card.Title>
                        <Card.Text>We have a 96% client retention rate and a client recommendation score that's 60% higher than the worldwide
                            average. Our 700+ client testimonials, award-winning culture are the perfect recipe for a successful digital compaign.
                        </Card.Text>
                        <Card.Link href="#">Learn more</Card.Link>
                    </Card>
                </Row>
            </Container>
            <Container className="bg-custom p-5 mt-5 div-rounded" id="WhoWeAre">
                <Row className="py-3">
                    <Col>
                        <h5>By the numbers</h5>
                        <h4 style={{ fontSize: 120, fontWeight: 'bold' }}>96%</h4>
                        <p style={{ fontWeight: 'bold' }}>Retention rate</p>
                        <p>Your business is in good hands at Soap Agency. While the average retention rate for marketing agencies hovers around 50%,
                            over 90% of our clients stay with us over the long haul because of the results we deliver and the relationships we build.</p>
                    </Col>
                    <Col className="d-flex flex-column justify-content-center align-items-center">
                        <p>Our best-in-class digital marketing agency impress customers with impactful results and wows them with stellar customer service.</p>
                        <img src={picGraph} alt="graph" width="450" height="300" className="img-rounded" />
                        {/* <Row className="p-0 " style={{ height: 200 }}>
                            <Col className="p-0" style={{ witdh: 80 }}>
                                <div className="h-64 d-inline-block chart" style={{ width: 80, backgroundColor: '#ff0000' }}>Height 25%</div>
                            </Col>
                            <Col className="p-0 w-80" style={{ witdh: 80 }}>
                                <div className="h-40 d-inline-block chart" style={{ width: 80, backgroundColor: '#ff0000' }}>Height 50%</div>
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
            <Container className="bg-custom px-5 py-3 my-5 div-rounded">
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
        </Container >
    );
}
export default Home;