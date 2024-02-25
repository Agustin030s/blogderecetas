import React from 'react'


export const RecetasCards = ({receta}) => {

    const ingredientesArray = receta.ingredientes.split(',').map(ingrediente => ingrediente.trim());


    console.log(receta)
  return (
    <div className='card'>
        <div className='cardHeader d-flex gap-3'>
            <div className='cardIMG'>
                <img src="https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg" alt="" height={150} width={150} />
            </div>
            <div className='cardTitle'>
                <h4>{receta.nombreReceta}</h4>
                <div className='cardValues'>
                <p>240 Calorias</p>
                <p>4.6/5</p>
                </div>
            </div>
        </div>
        <hr />
        <div className='cardBody'>
            <p>{receta.descripcionBreve}.</p>
            <h4>Ingredientes</h4>
            <ul>
          {ingredientesArray.map((ingrediente, index) => (
            <li key={index}>{ingrediente}</li>
          ))}
        </ul>
        </div>
        <hr />
        <div className='cardFooter'>
            <a className='cardButton' href="#">Ver receta completa</a>
         
        </div>
    </div>
  )
}

export default RecetasCards;