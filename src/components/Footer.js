import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer  className="site-footer">
      <Container>
        <Row className="text-center">
          <h5>How to fade hair barber school</h5>
        </Row>
        <Row className="text-center">
          <Col>
            5933-35 W 35th St <br />
            Cicero, IL 60804 <br />
            <a role='button' className='btn btn-link text-decoration-none' href='tel:+17087804663'>
              <i className="fa fa-phone" /> 1-708-780-4663
            </a>
          </Col>

          <Col>
            <a className='btn btn-social-icon btn-sm' href='http://instagram.com/'
              >
              <i className='fa fa-instagram' />
            </a>
            {' '}
            <a className="btn btn-social-icon btn-sm" href="http://www.facebook.com">
              <i className="fa fa-facebook" />
            </a>
            {' '}
            <a className="btn btn-btn-social-icon" href='http://maps.google.com'>
              <i className="fa fa-map-marker" aria-hidden="true" />
            </a>

          </Col>

          <Col>Links</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
