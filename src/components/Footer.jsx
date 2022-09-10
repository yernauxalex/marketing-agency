import { React, useState, useEffect } from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import instagramIcon from "../assets/instagram.png"
import twitterIcon from "../assets/twitter.png"
import youtubeIcon from "../assets/youtube.png"

function Footer() {
    const [width, setWidth] = useState(window.innerWidth)
    const breakpoint = 992;

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth))
    }, [])

    return (
        <>

            <Container fluid className="bg-dark" style={{ color: "white" }}>
                <Stack direction="horizontal" gap={3} className="pt-2">
                    <h3>Soap Agency</h3>
                    <div className="ms-auto">
                        <img src={instagramIcon} alt="logo" width="24" height="24" className="mx-2" />
                        <img src={twitterIcon} alt="logo" width="24" height="24" className="mx-2" />
                        <img src={youtubeIcon} alt="logo" width="24" height="24" className="mx-2" />
                    </div>
                </Stack>
                {width > breakpoint ? (
                    <Row fluid className="mt-2 d-flex justify-content-center">
                        <Col>
                            <ul className="pb-1 footer-list"><h6>Digital marketing</h6>
                                <li>Overview</li>
                                <li>Paid search</li>
                                <li>SEO</li>
                                <li>Email marketing</li>
                                <li>Analytics & Reporting</li>
                            </ul>
                        </Col>
                        <Col>
                            <ul className="footer-list"><h6>Website development</h6>
                                <li>Overview</li>
                                <li>Front end</li>
                                <li>CMS</li>
                                <li>Ecommerce website</li>
                                <li>CRM integration</li>
                            </ul>
                        </Col>
                        <Col>
                            <ul className="footer-list"><h6>Branding</h6>
                                <li>Overview</li>
                                <li>Brand guidelines</li>
                                <li>Brand identity</li>
                                <li>Brand workshop</li>
                                <li>Brand strategy</li>
                            </ul>
                        </Col>
                        <Col>
                            <ul className="footer-list"><h6>Socmed marketing</h6>
                                <li>Overview</li>
                                <li>Organic social</li>
                                <li>Paid social</li>
                            </ul>
                        </Col>
                        <Col>
                            <ul className="footer-list"><h6>Creative</h6>
                                <li>Overview</li>
                                <li>Web, UI/UX design</li>
                                <li>Print design</li>
                            </ul>
                        </Col>
                    </Row>
                ) : (<>
                    {/* <Container fluid>
                        <DropdownButton id="digitalMarketing" title="Digital marketing" size="sm">
                            <Dropdown.Item href='#'></Dropdown.Item>
                            <Dropdown.Item href='#'></Dropdown.Item>
                            <Dropdown.Item href='#'></Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton id="web" title="Website developpement" size="sm">
                            <Dropdown.Item href='#'></Dropdown.Item>
                            <Dropdown.Item href='#'></Dropdown.Item>
                            <Dropdown.Item href='#'></Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton id="branding" title="Branding" size="sm">
                            <Dropdown.Item href='#'></Dropdown.Item>
                            <Dropdown.Item href='#'></Dropdown.Item>
                            <Dropdown.Item href='#'></Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton id="socmedMarketing" title="Socmed marketing" size="sm">
                            <Dropdown.Item href='#'></Dropdown.Item>
                            <Dropdown.Item href='#'></Dropdown.Item>
                            <Dropdown.Item href='#'></Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton id="creative" title="Creative" size="sm">
                            <Dropdown.Item href='#'></Dropdown.Item>
                            <Dropdown.Item href='#'></Dropdown.Item>
                            <Dropdown.Item href='#'></Dropdown.Item>
                        </DropdownButton>
                    </Container> */}</>)}
                <Row className="pb-1 d-flex justify-content-evenly align-items-center footer-list">
                    <Col>2022 Soap Agency, Inc All rights reserved</Col>
                    <Col>Cookie Policy</Col>
                    <Col>Privacy policy</Col>
                    <Col><a href="https://www.flaticon.com/fr/auteurs/freepik" title="icônes">icônes créées par Freepik - Flaticon</a></Col>
                </Row>
            </Container>

        </>
    );
}
export default Footer;
