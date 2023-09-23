
import Image from 'next/image'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import 'bootstrap/dist/css/bootstrap.css'

export default function noticias() {
    return (
        <main>
            <Header></Header>
            <section>
                <div className="container-xl py-5 mt-5">
                    <div className="row justify-content-center gap-5">
                        <div className="col-lg-6">
                            <h2 className="text-center text-lg-start fw-bold fs-3 fs-lg-4">Encuentra tu carrera</h2>
                            <p className="mt-4 text-gray-600">
                                Bienvenidos a la sección de noticias de la página universitaria, donde les informamos
                                sobre los últimos acontecimientos y actividades de nuestra comunidad académica.
                                En esta edición, les contamos sobre el exitoso lanzamiento del satélite U-TEC,
                                diseñado y construido por un equipo de estudiantes y profesores de la Facultad
                                de Ingeniería. También les presentamos el nuevo programa de intercambio estudiantil
                                con la Universidad de Oxford, que ofrece la oportunidad de cursar un semestre en una
                                de las instituciones más prestigiosas del mundo. Además, les invitamos a participar
                                en el concurso de fotografía &quotMi universidad, mi hogar&quot, que premiará las mejores
                                imágenes que reflejen el orgullo y el sentido de pertenencia de los universitarios.
                                Y por último, les recordamos que ya están abiertas las inscripciones para los cursos
                                libres del segundo semestre, que incluyen temas como yoga, ajedrez, teatro y fotografía
                                digital. No se pierdan esta oportunidad de aprender y divertirse en la universidad.
                            </p>
                            <a href="#" className="btn btn-success mt-4">Solicita tu vacante</a>
                        </div>
                        <div className="col">
                            <div className="row gap-4">
                                <div className="col-5">
                                    <a href="/accountant" className="card border-0 rounded-xl shadow-sm text-success">
                                        <div className="card-body">
                                            <span className="d-block rounded-lg p-3">
                                                <svg className="" fill="none" stroke="green" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                                    <path
                                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z">
                                                    </path>
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222">
                                                    </path>
                                                </svg>
                                            </span>
                                            <h2 className="mt-2 fw-bold text-success">Ingenierías</h2>
                                            <p className="mt-1 text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-5">
                                    <a href="/accountant" className="card border-0 rounded-xl shadow-sm text-success">
                                        <div className="card-body">
                                            <span className="d-block rounded-lg p-3">
                                                <svg className="" fill="none" stroke="green" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                                    <path
                                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z">
                                                    </path>
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222">
                                                    </path>
                                                </svg>
                                            </span>
                                            <h2 className="mt-2 fw-bold text-success">Licenciaturas</h2>
                                            <p className="mt-1 text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div id="demo" className="carousel slide " data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <Image src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1486&q=80" 
                                alt="" className="d-block w-100 h-50" 
                                width={200} height={100}/>
                            </div>
                            <div className="carousel-item">
                                <Image src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                                alt="" className="d-block w-100" 
                                width={200} height={100}/>
                            </div>
                            <div className="carousel-item">
                                <Image src="https://plus.unsplash.com/premium_photo-1682284353470-53c3a913bded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                                alt="" className="d-block w-100" 
                                width={200} height={100}/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </main>
    )
}