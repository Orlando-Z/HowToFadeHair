import { Card, CardTitle, CardBody, Button, } from "reactstrap";
import HairCutStlyesImg from '../../app/cardImg/haircut-styles-img.jpg';

const HairCutInfoCard = () => {
  return (
    <Card
    style={{
      width: '16rem'
    }}
  >
    <img
      alt=""
      src={HairCutStlyesImg}
    />
    <CardBody>
      <CardTitle tag="h5" className="text-center">
        Hair Cut Styles
      </CardTitle>
    </CardBody>
  </Card>
  )
}

export default HairCutInfoCard;