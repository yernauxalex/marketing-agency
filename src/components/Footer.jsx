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
                        <a href=""><img src={instagramIcon} alt="logo" width="24" height="24" className="mx-2" /></a>
                        <a href=""><img src={twitterIcon} alt="logo" width="24" height="24" className="mx-2" /></a>
                        <a href=""><img src={youtubeIcon} alt="logo" width="24" height="24" className="mx-2" /></a>
                    </div>
                </Stack>
                {width > breakpoint ? (
                    <Row fluid className="mt-2 d-flex justify-content-center">
                        <Col>
                            <ul className="pb-1 footer-list"><h6>Digital marketing</h6>
                                <li><a href="">Overview</a></li>
                                <li><a href="">Paid search</a></li>
                                <li><a href="">SEO</a></li>
                                <li><a href="">Email marketing</a></li>
                                <li><a href="">Analytics & Reporting</a></li>
                            </ul>
                        </Col>
                        <Col>
                            <ul className="footer-list"><h6>Website development</h6>
                                <li><a href="">Overview</a></li>
                                <li><a href="">Front end</a></li>
                                <li><a href="">CMS</a></li>
                                <li><a href="">Ecommerce website</a></li>
                                <li><a href="">CRM integration</a></li>
                            </ul>
                        </Col>
                        <Col>
                            <ul className="footer-list"><h6>Branding</h6>
                                <li><a href="">Overview</a></li>
                                <li><a href="">Brand guidelines</a></li>
                                <li><a href="">Brand identity</a></li>
                                <li><a href="">Brand workshop</a></li>
                                <li><a href="">Brand strategy</a></li>
                            </ul>
                        </Col>
                        <Col>
                            <ul className="footer-list"><h6>Socmed marketing</h6>
                                <li><a href="">Overview</a></li>
                                <li><a href="">Organic social</a></li>
                                <li><a href="">Paid social</a></li>
                            </ul>
                        </Col>
                        <Col>
                            <ul className="footer-list"><h6>Creative</h6>
                                <li><a href="">Overview</a></li>
                                <li><a href="">Web, UI/UX design</a></li>
                                <li><a href="">Print design</a></li>
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
                    <Col><a href="https://www.flaticon.com/fr/auteurs/freepik" title="icônes" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>icônes créées par Freepik - Flaticon</a></Col>
                </Row>
            </Container>

        </>
    );
}
export default Footer;
