import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./componentes/Formulario";
import { Container } from "react-bootstrap";
function App() {
  return (
    <>
      <Container className="my-4 mainPage">
        <Formulario></Formulario>
      </Container>
    </>
  );
}

export default App;
