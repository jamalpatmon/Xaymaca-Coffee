import { Container, Col, Row } from "reactstrap";
import ContactUs from "../components/ContactUs";

const ContactPage = () => {
  return (
    <Container className="contact-form">
      <Row className="row-content text-center ">
        <Col xs="12">
          <h2>Get In Touch With Us</h2>
          <hr />
        </Col>
        <Col md="10 justify-content-center">
          <ContactUs />
        </Col>
      </Row>
    </Container>
  );
};
export default ContactPage;
