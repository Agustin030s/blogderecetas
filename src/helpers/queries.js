const URI_Recetas = import.meta.env.VITE_API_RECETAS;



export const obtenerRecetasAPI = async () =>{
    try {
        const respuesta = await fetch(URI_Recetas);
        return respuesta;
    } catch (error) {
        console.log("El error es", error)
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

export const editarRecetaAPI = async () => {
    try {
        console.log("Se esta editando la receta")
    } catch (error) {
        console.log("El error es: ", error)
    }
}

export const obtenerRecetaUnica = async (id) => {
    try {
        const respuesta = await fetch(`${URI_Recetas}/${id}`)
        console.log(respuesta)
        return respuesta
    } catch (error) {
        console.log("El error es:", error)
    }
}

