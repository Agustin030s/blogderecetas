import { Button, Image } from "react-bootstrap";

const ItemReceta = () => {
  return (
    <tr className="text-center">
      <td>1</td>
      <td>Tortilla de papas</td>
      <td>45'</td>
      <td className="text-center">
        <Image
          src="https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_kvh73gs5ar_tortilla-1024x683.jpg"
          className="imgTabla"
        ></Image>
      </td>
      <td>Lucia Barraza</td>
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