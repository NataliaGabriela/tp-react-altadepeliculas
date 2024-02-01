import { Button, Form, FormControl, FormGroup } from "react-bootstrap";
import { useState, useEffect  } from "react";
import MostrarPeliculas from "./MostrarPeliculas";
const Formulario = () => {
  const [pelicula, setPelicula] = useState({
    nombrePelicula: "",
    generoPelicula: "",
    descripcionPelicula: "",
  });
  const localStoragePeliculas =
    JSON.parse(localStorage.getItem("mostrarPeliculas")) || [];

  const [peliculas, setPeliculas] = useState(localStoragePeliculas);
  const handleSubmit = (e) => {
    e.preventDefault();
    setPeliculas([...peliculas, pelicula]);
    setPelicula({
      nombrePelicula: "",
      descripcionPelicula: "",
      generoPelicula: "",
    });
  };

  useEffect(() => {
    localStorage.setItem("mostrarPeliculas", JSON.stringify(peliculas));
  });
  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3 d-flex"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Titulo: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Titanic"
            minLength={3}
            maxLength={50}
            onChange={(e) =>
              setPelicula({ ...pelicula, nombrePelicula: e.target.value })
            }
            value={pelicula.nombrePelicula}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <div className="d-flex mb-3 align-items-center justify-content-between inputsColumna">
            <Form.Label>Género: </Form.Label>
            <Form.Select
              required
              onChange={(e) =>
                setPelicula({ ...pelicula, generoPelicula: e.target.value })
              }
              value={pelicula.generoPelicula}
            >
              <option disabled value={""}></option>
              <option>Comedia</option>
              <option>Drama</option>
              <option>Infantil</option>
            </Form.Select>
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="controlTextarea">
          <Form.Label>Descripción: </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            minLength={5}
            maxLength={100}
            onChange={(e) =>
              setPelicula({ ...pelicula, descripcionPelicula: e.target.value })
            }
            value={pelicula.descripcionPelicula}
          />
        </Form.Group>
        <Form.Group>
          <Button variant="info" className="mx-2" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <MostrarPeliculas peliculas={peliculas}></MostrarPeliculas>
    </section>
  );
};

export default Formulario;
