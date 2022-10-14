import { Card, CardTitle, CardBody, Button, } from "reactstrap";
import ContactUsImg from '../../app/cardImg/contact-img.jpg';

const ContactPageCard = () => {
  return (
    <Card
    style={{
      width: '18rem'
    }}
  >
    <img
      alt=""
      src={ContactUsImg}
    />
    <CardBody>
      <CardTitle tag="h5" className="text-center">
        Contact Us
      </CardTitle>
    </CardBody>
  </Card>
  )
}

export default ContactPageCard;