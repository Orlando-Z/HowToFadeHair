import { Container, Col, Row } from "reactstrap";
import AppointmentCard from "../features/Cards/AppointmentCard";
import BarberClassInfoCard from "../features/Cards/BarberClassInfoCard";
import ContactPageCard from "../features/Cards/ContactPageCard";
import HairCutInfoCard from "../features/Cards/HairCutInfoCard";
import AboutUsCard from "../features/Cards/AboutUsCard";

const HomePage = () => {
  return (
    <Container >
      <Row>
        <Col>
          <AboutUsCard />
        </Col>

        <Col>
          <BarberClassInfoCard />
        </Col>

        <Col>
          <AppointmentCard />
        </Col>

        <Col>
          <ContactPageCard />
        </Col>

        <Col >
          <HairCutInfoCard />
        </Col>
        
      </Row>  
    </Container>
  )
};

export default HomePage;
