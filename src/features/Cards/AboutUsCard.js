import { Card, CardTitle, CardBody, Button, } from "reactstrap";
import AboutUsImg from '../../app/cardImg/group-about-us-img.jpg';


const AboutUsCard = () => {
  return (
    <Card
    style={{
      width: '18rem'
    }}
  >
    <img
      alt="Group Photo"
      src={AboutUsImg}
    />
    <CardBody>
      <CardTitle tag="h5" className="text-center">
        About Us
      </CardTitle>
    </CardBody>
  </Card>
  );
}

export default AboutUsCard;