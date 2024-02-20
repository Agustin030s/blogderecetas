import { Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemReceta from "./recetas/ItemReceta";

const Administrador = () => {
  return (
    <Container className="my-4 mainContainer">
      <Row className="align-items-center justify-content-sm-center">
        <Col md="8">
          <h1 className="display-3">Recetas Disponibles</h1>
          <hr />
        </Col>
        <Col md="4" className="text-md-end text-center">
          <Link className="btn btn-primary" to="/administrador/crear">
            <i className="bi bi-file-earmark-plus"></i>
          </Link>
        </Col>
      </Row>
      <Table responsive striped hover bordered className="my-4">
        <thead className="text-center">
          <th>Cod</th>
          <th>Receta</th>
          <th>Duración</th>
          <th>URL de imagen</th>
          <th>Autor</th>
          <th>Opciones</th>
        </thead>
        <tbody>
          <ItemReceta></ItemReceta>
          <ItemReceta></ItemReceta>
        </tbody>
      </Table>
    </Container>
  );
};

export default Administrador;