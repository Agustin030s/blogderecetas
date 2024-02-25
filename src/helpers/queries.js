const URI_Recetas = import.meta.env.API_RECETAS;

export const crearRecetaAPI = async (recetaNueva) =>{
    try {
        const respuesta = await fetch(URI_Recetas, {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(recetaNueva),
        });
        console.log(respuesta);
        return respuesta;
    } catch (error) {
        console.log(error);
    }
}