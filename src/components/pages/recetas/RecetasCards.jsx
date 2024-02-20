import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const RecetasCards = () => {
  return (
    <div className='card'>
        <div className='cardHeader d-flex gap-3'>
            <div className='cardIMG'>
                <img src="https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg" alt="" height={150} width={150} />
            </div>
            <div className='cardTitle'>
                <h4>Cheese Burguer con verduras</h4>
                <p>240 Calorias</p>
                <p>4.6/5</p>
            </div>
        </div>
        <hr />
        <div className='cardBody'>
            <p>Esta deliciosa Cheeseburger con Verduras combina lo mejor de ambos mundos: la jugosa carne de res, el queso derretido, y la frescura de las verduras.</p>
            <h4>Ingredientes</h4>
            <ul>
                <li>Pan</li>
                <li>Lechuga</li>
                <li>Tomate</li>
                <li>Carne</li>
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