/* eslint-disable react-hooks/rules-of-hooks */
import Script from 'next/script'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react'

export default function onboarding() {
  useEffect(() => {
    // Define los pasos del recorrido
    const pasos = [
      { elemento: "acerca", mensaje: "Bienvenido a la página 'Acerca de Nosotros'. Aquí puedes obtener información sobre nuestra organización." },
      { elemento: "contacto", mensaje: "Visita la página 'Contáctanos' para obtener detalles de contacto y enviarnos un mensaje." },
      { elemento: "oferta", mensaje: "Explora nuestra 'Oferta Educativa' para conocer nuestros programas de estudio." },
      { elemento: "plan", mensaje: "Consulta el 'Plan de Estudio' para obtener información detallada sobre nuestros cursos y currículo." }
    ];

    // Función para mostrar un paso del recorrido
    function mostrarPaso(paso) {
      const elemento = document.querySelector(`[href="#${paso.elemento}"]`);
      const recorrido = document.getElementById("recorrido");

      // Posiciona el recorrido junto al enlace
      const rect = elemento.getBoundingClientRect();
      recorrido.style.left = rect.left + "px";
      recorrido.style.top = rect.bottom + "px";

      // Muestra el mensaje del paso
      recorrido.innerHTML = paso.mensaje;
      recorrido.style.display = "block";
    }

    // Función para ocultar el recorrido
    function ocultarPaso() {
      const recorrido = document.getElementById("recorrido");
      recorrido.style.display = "none";
    }

    // Iniciar el recorrido con el primer paso
    let indicePaso = 0;
    mostrarPaso(pasos[indicePaso]);

    // Manejar clic en cualquier parte de la página para avanzar al siguiente paso
    function handleDocumentClick() {
      indicePaso++;
      if (indicePaso < pasos.length) {
        mostrarPaso(pasos[indicePaso]);
      } else {
        // Cuando se completan todos los pasos, oculta el recorrido
        ocultarPaso();
      }
    }

    // Add event listener when the component mounts
    document.addEventListener("click", handleDocumentClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);


    return (
        <main>
            <Header/>
             <div className="container py-5 mt-5">
        <div className="card">
          <card className="card-body">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
        <div id="recorrido" ></div>
        <Footer></Footer>
        </main>
    )
}