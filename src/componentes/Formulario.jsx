import { Button, Form, FormGroup } from "react-bootstrap";
import { useState } from "react";
import ListaPeliculas from "./ListaPeliculas";
const Formulario = () => {
    const [pelicula, setPelicula] = useState('');
    const [peliculas, setPeliculas] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setPeliculas([...peliculas, pelicula]);
    //limpiar formulario
    setPelicula("");
  };
  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3 d-flex"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            type="text"
            placeholder="Titanic"
            minLength={3}
            maxLength={50}
            onChange={(e) => setPelicula(e.target.value)}
            value={pelicula}
          />
          </Form.Group>
          <Form.Group>
          <Form.Select aria-label="selesctPeliculas">
            <option>Género</option>
            <option value="comedia">Comedia</option>
            <option value="drama">Drama</option>
            <option value="infantil">Infantil</option>
          </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="controlTextarea">
            <Form.Label>Descripción</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group>
          <Button variant="info" className="mx-2" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaPeliculas peliculas={peliculas}></ListaPeliculas>
    </section>
  );
};

export default Formulario;
