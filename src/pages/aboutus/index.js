import Image from 'next/image'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import 'bootstrap/dist/css/bootstrap.css'
export default function aboutus() {
    return (
        <main>
            <Header />
            <div className="container-xl py-5 mt-5">
                <div className="row">
                    <div className="col-8 col-md-10 my-3">
                        <h1 className="text-primary text-center">Acerca de nosotros</h1>
                    </div>
                    <hr className="bg-success" />
                </div>
                <div className="row d-flex justify-content-center">
                    <Image src="http://www.utez.edu.mx/images/2022/02/Portada-conocenos.png"
                        className="img"
                        width={600} height={500} />
                </div>
                <br />
                <div className="row">
                    <div className="col-md-12 text-">
                        <p className="text-wrap">
                            La Universidad Tecnológica Emiliano Zapata (UTEZ), es una Universidad pública creada en el año 2000 que forma
                            parte del Sistema Nacional de Universidades Tecnológicas de la SEP, cuyo innovador modelo ofrece
                            planes de estudio para formar Técnicas y Técnicos Superiores Universitarios e Ingenieros e Ingenieras en
                            sólo tres años ocho meses, generando profesionistas competentes con altos niveles tecnológicos para dar
                            respuesta a las necesidades de los sectores social y productivo de la región y del país.
                        </p>
                        <div className="row text-center">
                            <div className="card col-md-6">
                                <div className="card-header text-center">Misión</div>
                                <div className="card-body">
                                    <p className="text-wrap">
                                        Formar profesionistas competitivos, con capacidades tecnológicas y sentido humanista,  a través de programas educativos pertinentes, incluyentes, con equidad y calidad, comprometidos con el desarrollo sostenible, que realiza investigación tecnológica, promueve la innovación y fomenta la vinculación con los sectores productivo, público y social, para contribuir a satisfacer las necesidades de la sociedad.
                                    </p>
                                </div>
                            </div>
                            <div className="card col-md-6">
                                <div className="card-header text-center">Visión</div>
                                <div className="card-body">
                                    <p className="text-wrap">
                                        Ser una institución de educación superior tecnológica, reconocida a nivel nacional e internacional por su calidad académica, que contribuye al desarrollo tecnológico,  mediante la innovación, vinculación e investigación, y continuando con el compromiso de ser referente dentro del Subsistema de Universidades Tecnológicas y Politécnicas.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-center">Objetivos institucionales</h3>
                        <hr />
                        <ul>
                            <li><strong>Impartir educación tecnológica en los niveles Técnico Superior Universitario y Licenciatura con equidad y calidad, </strong>mediante la implementación de programas educativos  pertinentes acordes a los requerimientos de desarrollo económico y social.</li>
                            <li><strong>Impartir educación tecnológica en los niveles Técnico Superior Universitario y Licenciatura con equidad y calidad, </strong>mediante la implementación de programas educativos  pertinentes acordes a los requerimientos de desarrollo económico y social.</li>
                            <li><strong>Impartir educación tecnológica en los niveles Técnico Superior Universitario y Licenciatura con equidad y calidad, </strong>mediante la implementación de programas educativos  pertinentes acordes a los requerimientos de desarrollo económico y social.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </main>
    )
}