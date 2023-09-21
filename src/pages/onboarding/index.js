import Script from 'next/script'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';

export default function onboarding() {
    const router = useRouter();
    const recorridoRef = useRef(null);
  
    const pasos = [
      { elemento: "acerca", mensaje: "Bienvenido a la página 'Acerca de Nosotros'. Aquí puedes obtener información sobre nuestra organización." },
      { elemento: "contacto", mensaje: "Visita la página 'Contáctanos' para obtener detalles de contacto y enviarnos un mensaje." },
      { elemento: "oferta", mensaje: "Explora nuestra 'Oferta Educativa' para conocer nuestros programas de estudio." },
      { elemento: "plan", mensaje: "Consulta el 'Plan de Estudio' para obtener información detallada sobre nuestros cursos y currículo." }
    ];
  
    const [indicePaso, setIndicePaso] = useState(0);
  
    useEffect(() => {
      function mostrarPaso(paso) {
        if (paso && paso.elemento) {
          const elemento = document.querySelector(`[href="#${paso.elemento}"]`);
          const rect = elemento.getBoundingClientRect();
  
          if (recorridoRef.current) {
            recorridoRef.current.style.left = rect.left + "px";
            recorridoRef.current.style.top = rect.bottom + "px";
            recorridoRef.current.style.display = "block";
          }
        }
      }
  
      function ocultarPaso() {
        if (recorridoRef.current) {
          recorridoRef.current.style.display = "none";
        }
      }
  
      mostrarPaso(pasos[indicePaso]);
  
      function handleDocumentClick() {
        setIndicePaso((prevIndice) => prevIndice + 1);
      }
  
      if (indicePaso < pasos.length) {
        document.addEventListener("click", handleDocumentClick);
      } else {
        ocultarPaso();
      }
  
      return () => {
        document.removeEventListener("click", handleDocumentClick);
      };
    }, [indicePaso]);
  
    useEffect(() => {
      const handleRouteChange = () => {
        setIndicePaso(0);
      };
  
      router.events.on('routeChangeStart', handleRouteChange);
  
      return () => {
        router.events.off('routeChangeStart', handleRouteChange);
      };
    }, [router]);

    return (
        <main>
            <Header/>
            
             <div className="container py-5 mt-5">
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
        <div id="recorrido" ref={recorridoRef}></div>\
        <Footer></Footer>
        <script type='text/jsx'>
        
        </script>
        </main>
    )
}