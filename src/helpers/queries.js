const URI_Recetas = import.meta.env.VITE_API_RECETAS;


export const obtenerRecetasAPI = async () =>{
    try {
        const respuesta = await fetch(URI_Recetas);
        return respuesta;
    } catch (error) {
        console.log(error)
    }
}

export const crearRecetaAPI = async (recetaNueva) =>{
    try {
        const respuesta = await fetch(URI_Recetas, {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(recetaNueva),
        });
        return respuesta;
    } catch (error) {
        console.log(error);
    }
}