import React, { useState } from "react";
import { Form, Col, Row, Button } from 'react-bootstrap';

function ContactForm() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="7" controlId="validationEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Mark.Otta@mail.com" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid email
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="State" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="validationCustom06">
                    <Form.Label>Your project</Form.Label>
                    <Form.Control type="text" placeholder="Explain your project" required style={{ height: '85px' }} />
                    <Form.Control.Feedback type="invalid">
                        We need to know your project to help you
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="validationCustom07">
                    <Form.Label>Website URL</Form.Label>
                    <Form.Control type="url" placeholder="www.yourwebsite.com" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid url
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Form.Group className="mb-3">
                <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                />
            </Form.Group>
            <Button type="submit">Submit form</Button>
        </Form>
    );
}
export default ContactForm;