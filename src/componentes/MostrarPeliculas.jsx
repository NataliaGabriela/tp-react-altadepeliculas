import { Container, Row, Col } from "react-bootstrap";
import ItemPelicula from "./ItemPelicula";

const MostrarPeliculas = ({peliculas}) => {
  return (
    <Container>
      <Row>
        {peliculas.map((elementoPelicula, posicionPelicula) => (
          <Col>
            <ItemPelicula
              key={posicionPelicula}
            pelicula={elementoPelicula}
            ></ItemPelicula>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MostrarPeliculas;
