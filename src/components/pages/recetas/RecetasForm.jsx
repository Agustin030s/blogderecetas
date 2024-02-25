import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";


const RecetasForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
   console.log(data)
  };

  return (
<section className="container mainSection">
  <h1 className="display-4 mt-5">Nueva Receta</h1>
  <hr />
  <Form className="my-4" onSubmit={handleSubmit(onSubmit)}>
    <Form.Group className="mb-3" controlId="formNombreReceta">
      <Form.Label>Nombre de la Receta*</Form.Label>
      <Form.Control
        type="text"
        placeholder="Ej: Tortilla de papas"
        {...register("nombreReceta", {
          required: "Campo obligatorio",
          minLength: { value: 2, message: "Mínimo 2 caracteres" }
        })}
      />
      <Form.Text className="text-danger">
        {errors.nombreReceta && errors.nombreReceta.message}
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formDescripcionBreve">
      <Form.Label>Descripción Breve*</Form.Label>
      <Form.Control
        type="text"
        placeholder="Ej: Aprende a preparar esta receta de Tortilla de Papas Tradicional, por Estefanía Colombo en elGourmet"
        as="textarea"
        {...register("descripcionBreve", {
          required: "Campo obligatorio",
          minLength: { value: 10, message: "Mínimo 10 caracteres" },
          maxLength: { value: 150, message: "Máximo 150 caracteres" }
        })}
      />
      <Form.Text className="text-danger">
        {errors.descripcionBreve && errors.descripcionBreve.message}
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formDuracion">
      <Form.Label>Duración*</Form.Label>
      <Form.Control
        type="number"
        placeholder="Ej: 45'"
        {...register("duracion", {
          required: "Campo obligatorio"
        })}
      />
      <Form.Text className="text-danger">
        {errors.duracion && errors.duracion.message}
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formIngredientes">
      <Form.Label>Ingredientes*</Form.Label>
      <Form.Control
        type="text"
        placeholder="Ej: papa, cebolla, huevo"
        {...register("ingredientes", {
          required: "Campo obligatorio"
        })}
      />
      <Form.Text className="text-danger">
        {errors.ingredientes && errors.ingredientes.message}
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formPreparacion">
      <Form.Label>Preparación*</Form.Label>
      <Form.Control
        type="text"
        placeholder="Ej: se debe hervir la papa, etc etc"
        as="textarea"
        {...register("preparacion", {
          required: "Campo obligatorio",
          minLength: { value: 10, message: "Mínimo 10 caracteres" },
          maxLength: { value: 400, message: "Máximo 400 caracteres" }
        })}
      />
      <Form.Text className="text-danger">
        {errors.preparacion && errors.preparacion.message}
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formPorciones">
      <Form.Label>Porciones*</Form.Label>
      <Form.Control
        type="number"
        placeholder="Ej: 4"
        {...register("porciones", {
          required: "Campo obligatorio",
          min: { value: 1, message: "Mínimo 1" },
          max: { value: 10, message: "Máximo 10" }
        })}
      />
      <Form.Text className="text-danger">
        {errors.porciones && errors.porciones.message}
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formImagen">
      <Form.Label>Imagen URL*</Form.Label>
      <Form.Control
        type="text"
        placeholder="Ej: https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_kvh73gs5ar_tortilla-1024x683.jpg"
        {...register("imagen", {
          required: "Campo obligatorio",
          pattern: {
            value: /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i,
            message: "Debe ingresar una url de imagen válida (png|jpg|jpeg|gif|png|svg)"
          }
        })}
      />
      <Form.Text className="text-danger">
        {errors.imagen && errors.imagen.message}
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formAutor">
      <Form.Label>Autor*</Form.Label>
      <Form.Control
        type="text"
        placeholder="Ej: Lucia Barraza"
        {...register("autor", {
          required: "Campo obligatorio"
        })}
      />
      <Form.Text className="text-danger">
        {errors.autor && errors.autor.message}
      </Form.Text>
    </Form.Group>

    <Button type="submit" variant="success">
      Guardar
    </Button>
  </Form>
</section>

  );
};

export default RecetasForm;