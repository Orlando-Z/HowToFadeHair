import { Card, CardTitle, CardBody, Button, } from "reactstrap";
import AppointmentImg from '../../app/cardImg/appointment-img.jpg';


const AppointmentCard = () => {
  return (
    <Card
    style={{
      width: '18rem'
    }}
  >
    <img
        alt=""
        src={AppointmentImg}
    />
    <CardBody>
      <CardTitle tag="h5" className="text-center">
        Book an Appointment
      </CardTitle>
    </CardBody>
  </Card>
  )
}

export default AppointmentCard;