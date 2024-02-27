import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ItemReceta = ({receta}) => {

  const borrarReceta = () =>{
    Swal.fire({
      title: "¿Estás seguro de eliminar este producto?",
      text: "No se puede revertir este paso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        //agregar la logica que borre un producto mediante la api
        const respuesta = await borrarProductoAPI(producto.id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Producto eliminado!",
            text: `El producto "${producto.nombreProducto}" fue eliminado correctamente`,
            icon: "success",
          });
          //actualizar tabla admin
          const respuestaProductos = await leerProductoAPI();
          if (respuestaProductos.status === 200) {
            const productosRestantes = await respuestaProductos.json();
            setProductos(productosRestantes);
          } else {
            Swal.fire({
              title: "Ocurrio un error",
              text: `Intenta está operación en unos minutos`,
              icon: "error",
            });
          }
        } else {
          Swal.fire({
            title: "Ocurrio un error",
            text: `El producto ${producto.nombreProducto} no pudo ser eliminado, intente esta operación en unos minutos`,
            icon: "error",
          });
        }
      }
    });
  }
  
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
        <Link to={`/administrador/editar/` + receta.id} className="btn btn-warning me-2 mb-2">
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" className="me-2 mb-2" onClick={borrarReceta}>
          <i className="bi bi-trash3"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;