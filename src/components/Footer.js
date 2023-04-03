import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer  className="site-footer">
      <Container>
        <Row className="text-center">
          <h5>How To Fade Hair Barber School</h5>
        </Row>
        <Row className="text-center">
          <Col>
            5933-35 W 35th St <br />
            Cicero, IL 60804 <br />
            <a role='button' className='text-decoration-none link' href='tel:+17087804663'>
              <i className="fa fa-phone" /> 1-708-780-4663
            </a>
          </Col>

          <Col>
            Booksy App link
          </Col>

          <Col>Links <br />
          <a className='btn btn-social-icon' href='http://instagram.com/'>
              <i className='fa fa-instagram link' />
            </a>
            {' '}
            <a className='btn btn-social-icon' href="http://www.facebook.com">
              <i className='fa fa-facebook link' />
            </a>
            <p>Web page by OZ </p>
          </Col>
          
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
