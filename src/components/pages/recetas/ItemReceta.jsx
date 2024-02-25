import { Button, Image } from "react-bootstrap";

const ItemReceta = ({receta}) => {
  return (
    <tr className="text-center">
      <td>{receta.id}</td>
      <td className="text-truncate nomReceta">{receta.nombreReceta}</td>
      <td>{receta.duracion}'</td>
      <td className="text-center">
        <Image
          src={receta.imagen}
          className="imgTabla"
        ></Image>
      </td>
      <td>{receta.autor}</td>
      <td className="text-center">
        <Button variant="warning" className="me-2 mb-2">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger" className="me-2 mb-2">
          <i className="bi bi-trash3"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;