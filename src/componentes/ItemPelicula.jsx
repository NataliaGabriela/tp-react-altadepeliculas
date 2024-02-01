import "../App.css";
import { Card } from "react-bootstrap";
const ItemPelicula = ({ pelicula }) => {
  return (
    <Card className="my-2 shadow rounded p-3">
      <Card.Body className="px-0">
        <Card.Title className="mx-2">
          Titulo: {pelicula.nombrePelicula}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Género: {pelicula.generoPelicula}
        </Card.Subtitle>
        <Card.Text>Descripción: {pelicula.descripcionPelicula}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ItemPelicula;
