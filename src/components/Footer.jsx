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
                        <ul className="footer-list">Section 1
                            <li>item 1</li>
                            <li>item 2</li>
                            <li>item 3</li>
                            <li>item 4</li>
                            <li>item 5</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul className="footer-list">Section 2
                            <li>item 1</li>
                            <li>item 2</li>
                            <li>item 3</li>
                            <li>item 4</li>
                            <li>item 5</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul className="footer-list">Section 3
                            <li>item 1</li>
                            <li>item 2</li>
                            <li>item 3</li>
                            <li>item 4</li>
                            <li>item 5</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul className="footer-list">Section 4
                            <li>item 1</li>
                            <li>item 2</li>
                            <li>item 3</li>
                            <li>item 4</li>
                            <li>item 5</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul className="footer-list">Section 5
                            <li>item 1</li>
                            <li>item 2</li>
                            <li>item 3</li>
                            <li>item 4</li>
                            <li>item 5</li>
                        </ul>
                    </Col>
                </Row>

            </Container>
        </>
    );
}
export default Footer;
