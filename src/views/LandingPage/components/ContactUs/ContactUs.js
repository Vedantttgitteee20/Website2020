import React from 'react';
import {Link} from 'react-router-dom'
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";
import "./ContactUs.css"
function ContactUs() {
    return (
        <>
        <div className="section landing-section">
          <Container className="u-border">
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center heading-main">Keep in touch?</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label className="small-heading">Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label className="small-heading">Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label className="small-heading">Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                  <a className="btn-blue mt-5" href="javascript:alert('Hello World!');">Send</a>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
            
          </Container>
        </div>
      
        </>
    );


}
export default ContactUs;