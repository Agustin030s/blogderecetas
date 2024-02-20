import { Button } from 'react-bootstrap'
import conocenosIMG from "../../assets/img/ConocenosIMG.jpg"
import RecetasCards from './recetas/RecetasCards';


const Inicio = () => {
  return (
    <main>
            <section className='container d-flex my-5 gap-5'>
                <div className='d-flex flex-column justify-content-center gap-3 conocenosInfo'>
                    <h2>Bienvenido a <span>El Rincón Gourmet</span> <br /> tu lugar culinario definitivo </h2>
                    <hr />
                    <p>En "El Rincón Gourmet", nuestro objetivo es inspirarte a explorar el mundo de la gastronomía desde la comodidad de tu hogar. Desde exquisitas recetas tradicionales hasta creaciones innovadoras, encontrarás una amplia selección de platillos para satisfacer todos los gustos y ocasiones.</p>
                    <p>Además, en "El Rincón Gourmet" no solo encontrarás recetas deliciosas, sino también información útil sobre ingredientes, técnicas de preparación y consejos de presentación. Te invitamos a explorar nuestro extenso catálogo y a descubrir nuevas formas de disfrutar de la comida.</p>
                </div>
                <div className='conocenosIMG'>
                    <img src={conocenosIMG} alt="" height={500} width={600} />
                </div>
            </section>
            <div className='separador'>
                <br />
            </div>
            <section className='container py-5'>
                <h2>Recetas más Buscadas</h2>
                <div className='d-flex flex-wrap gap-5'>
                <RecetasCards></RecetasCards>
                <RecetasCards></RecetasCards>
                <RecetasCards></RecetasCards>
                <RecetasCards></RecetasCards>
                <RecetasCards></RecetasCards>
                <RecetasCards></RecetasCards>
                </div>
            </section>
            <div className='separador'>
                <br />
            </div>
        </main>  
  );
};

export default Inicio;
