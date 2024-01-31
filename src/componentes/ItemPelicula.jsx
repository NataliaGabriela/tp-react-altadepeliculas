import "../App.css";
import { Button, Card } from "react-bootstrap";
const ItemColor = ({ nombreColor, borrarColor }) => {
  return (
    <Card className="my-2 shadow rounded">
      <Card.Body className="px-0">
        <Card.Title className="mx-2">{nombreColor}</Card.Title>
        <div className="divCardColor">
          <div
            className="border border-black"
            style={{
              width: "100px",
              height: "100px",
              background: nombreColor,
              margin: "auto",
            }}
          ></div>
        </div>
        <Button
          className="my-3 shadow rounded btnColor"
          variant="danger"
          onClick={() => borrarColor(nombreColor)}
        >
          Borrar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ItemColor;
