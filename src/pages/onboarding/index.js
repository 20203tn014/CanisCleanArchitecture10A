import Script from 'next/script'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react';

export default function onboarding() {
    useEffect(()=>{
        import('../../domain/usecases/onboarding_function/aboutus.js') // Reemplaza '../ruta/recorrido.js' con la ruta correcta a tu archivo JavaScript
        .then((module) => {
          // Ejecuta el código del archivo JavaScript
          // Aquí puedes realizar cualquier lógica adicional que necesites
        })
        .catch((error) => {
          console.error('Error al cargar el módulo:', error);
        });
    },[])

    return (
        <main>
            <Header></Header>
            
             <div className="container">
        <div className="card">
          <card className="card-body">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="#">Tu Sitio</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                      <li className="nav-item">
                          <a className="nav-link" href="#acerca">Acerca de Nosotros</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#contacto">Contáctanos</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#oferta">Oferta Educativa</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#plan">Plan de Estudio</a>
                      </li>
                  </ul>
              </div>
          </nav>
          </card>
        </div>
      </div>
        <div id="recorrido"></div>\
        <Footer></Footer>
        </main>
    )
}