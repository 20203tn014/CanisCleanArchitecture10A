/* eslint-disable react-hooks/rules-of-hooks */
import Image from 'next/image'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';

export default function home() {
    const [tsuVisible, setTsuVisible] = useState(false);
    const [ingVisible, setIngVisible] = useState(false);
    const [licVisible, setLicVisible] = useState(false);

    const toggleTsu = () => {
        setTsuVisible(!tsuVisible);
    };

    const toggleIng = () => {
        setIngVisible(!ingVisible);
    };

    const toggleLic = () => {
        setLicVisible(!licVisible);
    };

    return (
        <main>
            <Header />
            <div className='container-xl mt-5 py-5'>
                <h1 className="ms-5">Plan de Estudios</h1>

                <div className="row container" >
                <div className="col-12 col-md-4">
                        <button id="tsu" className="btn btn-outline-success" onClick={toggleTsu}>
                            <i className="fa-solid fa-school"></i>  TSU
                        </button>
                        {tsuVisible && (
                            <div className="card border-success mb-3 col-12 col-md-4 mt-3" style={{ minWidth: '100vh' }}>
                                {/* Contenido de TSU */}
                            </div>
                        )}
                    </div>

                    <div className="col-12 col-md-4">
                        <button id="ing" className="btn btn-outline-info" onClick={toggleIng}>
                            <i className="fa-solid fa-school"></i>  Ingeniería
                        </button>
                        {ingVisible && (
                            <div className="card border-info mb-3 col-12 col-md-4 mt-3" style={{ minWidth: '100vh' }}>
                                {/* Contenido de Ingeniería */}
                            </div>
                        )}
                    </div>

                    <div className="col-12 col-md-4">
                        <button id="lic" className="btn btn-outline-danger" onClick={toggleLic}>
                            <i className="fa-solid fa-school"></i>  Licenciatura
                        </button>
                        {licVisible && (
                            <div className="card border-danger mb-3 col-12 col-md-4 mt-3" style={{ minWidth: '100vh' }}>
                                {/* Contenido de Licenciatura */}
                            </div>
                        )}
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div style={{width:'100%',height:'550px',position: 'relative'}}>
                                <Image src="http://www.utez.edu.mx/images/2022/02/Portada-conocenos.png" 
                                className="image-fluid " layout='fill' objectFit='contain'/>
                            </div>
                            <br />
                            <h1 style={{ marginLeft: '45px' }} className='text-center'>¿Quiénes somos?</h1>
                            <hr style={{ marginLeft: '45px', marginRight: '45px' }} />
                            <div className="col-auto text-center" style={{ margin: '40px' }}>
                                <p>La Universidad Tecnológica Emiliano Zapata (UTEZ), es una Universidad pública creada en el año 2000 que
                                    forma parte del Sistema Nacional de Universidades Tecnológicas de la SEP, cuyo innovador modelo ofrece
                                    planes de estudio para formar Técnicas y Técnicos Superiores Universitarios e Ingenieros e Ingenieras
                                    en sólo tres años ocho meses, generando profesionistas competentes con altos niveles tecnológicos para
                                    dar respuesta a las necesidades de los sectores social y productivo de la región y del país.</p>
                            </div>
                            <h2 className="text-center" style={{ color: '#3d6087' }}>Misión</h2>
                            <div className="col-auto text-center" style={{ margin: '40px' }}>
                                <p>
                                    Formar profesionistas competitivos, con capacidades tecnológicas y sentido humanista,
                                    a través de programas educativos pertinentes, incluyentes, con equidad y calidad,
                                    comprometidos con el desarrollo sostenible, que realiza investigación tecnológica,
                                    promueve la innovación y fomenta la vinculación con los sectores productivo, público y social,
                                    para contribuir a satisfacer las necesidades de la sociedad.
                                </p>
                            </div>
                            <h2 className="text-center" style={{ color: '#3d6087' }}>Visión</h2>
                            <div className="col-auto text-center" style={{ margin: '40px' }}>
                                <p>
                                    Ser una institución de educación superior tecnológica, reconocida a nivel nacional e internacional
                                    por su calidad académica, que contribuye al desarrollo tecnológico,  mediante la innovación,
                                    vinculación e investigación, y continuando con el compromiso de ser referente dentro del Subsistema
                                    de Universidades Tecnológicas y Politécnicas.
                                </p>
                            </div>
                        </div>
                    </div>


                    <h1 className="text-center">Oferta Educativa</h1>
                    <br />
                    <div className="container">
                        <div style={{textAlign:'center'}}>
                            <Image src="http://www.utez.edu.mx/images/2018/feb/oferta/MODELO_EDUCATIVO_2-01.png" alt="Oferta Educativa UTEZ" 
                            className="Image-fluid" height={550} width={900} style={{maxWidth: '100%'}} />
                        </div>
                    </div>

                    <br />
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    TSU - Técnico Superior Universitario
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li>Técnico Superior Universitario en Procesos Industriales área: Manufactura</li>
                                        <li>Técnologías de la Información área: Infraestructura de Redes Digitales</li>
                                        <li>Tecnologías de la Información área: Desarrollo de Software Multiplataforma</li>
                                        <li>Terapia Física área: Rehabilitación</li>
                                        <li>Terapia física área: Turismo de Salud y Bienestar</li>
                                        <li>Diseño digital área: Animación</li>
                                        <li>Administración área: Capital Humano</li>
                                        <li>Contaduría</li>
                                        <li>Diseño y moda industrial área: Producción</li>
                                        <li>Mantenimiento área: Industrial</li>
                                        <li>Mecatrónica área: Automatización</li>
                                        <li>Desarrollo de negocios área: Mercadotecnia</li>
                                        <li>Nanotecnología área: Materiales</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Ingeniería
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li>Ingeniería en Desarrollo y Gestión de Software</li>
                                        <li>Ingeniería en Redes Inteligentes y Ciberseguridad</li>
                                        <li>Ingeniería Industrial</li>
                                        <li>Ingeniería en Mecatrónica</li>
                                        <li>Ingeniería en Nanotecnología</li>
                                        <li>Ingeniería en Diseño Textil y Moda</li>
                                        <li>Ingeniería en Mantenimiento Industrial</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Licenciatura
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li>Licenciatura en Terapia Física</li>
                                        <li>Licenciatura en Diseño Digital y Producción Audiovisual</li>
                                        <li>Licenciatura en Innovación de Negocios y Mercadotecnia</li>
                                        <li>Licenciatura en Gestión de Capital Humano</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="row" >
                        <div className="col-12">
                            <div className="card" style={{ marginTop: '20px' }}>
                                <div className="card-header">
                                    Contáctanos
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Ubicación</h5>
                                    <p className="card-text">Av. Universidad Tecnológica No.1, Col. Palo Escrito, C.P. 62760,
                                        Emiliano Zapata, Morelos.</p>
                                    <h5 className="card-title">Teléfono</h5>
                                    <p className="card-text">(01 777) 3 68 11 65</p>
                                    <p className="card-text">Comunicate sin costo al : 01 800 050 UTEZ(8839)</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div />
            </div>
<Footer/>
        </main>
    )
}