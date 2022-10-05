import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="text-center">
          <h5>How to fade hair barber school</h5>
        </Row>
        <Row>
          <Col>
            5933-35 W 35th St, Cicero, IL 60804 <br />
            708-780-4663
          </Col>

          <Col>Social Media Links</Col>

          <Col>Created by OZ web designs</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
