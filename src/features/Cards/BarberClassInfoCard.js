import { Card, CardTitle, CardBody, Button, } from "reactstrap";
import ClassesImg from '../../app/cardImg/classes-chairs-img.jpg';

const BarberClassInfoCard = () => {
  return (
    <Card
    style={{
      width: '18rem'
    }}
  >
    <img
      alt=""
      src={ClassesImg}
    />
    <CardBody>
      <CardTitle tag="h5" className="text-center">
        Classes
      </CardTitle>
    </CardBody>
  </Card>
  )
}

export default BarberClassInfoCard;