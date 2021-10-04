import React from "react";
import "./ContactUs.css";
import { Form, Button } from "react-bootstrap";
function ContactUs() {
  return (
    <div className="courses">
      {/* contact us form */}
      <Form className="contact-form">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="form-label">Enter Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="form-label">Email Your Address</Form.Label>
          <Form.Control type="email" placeholder="name@gmail.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="form-label">Send Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" className="d-flex bt-button" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ContactUs;
