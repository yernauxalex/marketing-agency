import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";

function Footer() {
    return (
        <>
            <Container fluid className="bg-dark" style={{ color: "white" }}>
                <Stack direction="horizontal" gap={3}>
                    <h3>Soap Agency</h3>
                    <div className="ms-auto">
                        <img src="https://picsum.photos/20" alt="logo" width="20" height="20" />
                        <img src="https://picsum.photos/20" alt="logo" width="20" height="20" />
                        <img src="https://picsum.photos/20" alt="logo" width="20" height="20" />
                    </div>
                </Stack>

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

            </Container>
        </>
    );
}
export default Footer;
