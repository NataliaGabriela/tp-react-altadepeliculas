import { Container, Row, Col } from "react-bootstrap";
import ItemColor from "./ItemColor";

const ListaColores = (props) => {
  return (
    <Container>
      <Row>
        {props.colores.map((elementoColor, posicionColor) => (
          <Col>
            <ItemColor
              key={posicionColor}
              nombreColor={elementoColor}
              borrarColor={props.borrarColor}
            ></ItemColor>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ListaColores;
