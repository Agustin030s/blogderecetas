import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import error404IMG from "../../assets/img/error404IMG.png"


const Error404 = () => {
    return (
        <section class="container my-3">
        <div class="text-center">
          <img src={error404IMG} class="img-fluid" alt="error 404" />
        </div>

        <div className="d-grid gap-2">
      <Button variant="dark" size="lg" as={Link} to='/'>
        Volver al Inicio
      </Button>
    </div>
    </section>
    );
};

export default Error404;