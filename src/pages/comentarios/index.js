import Image from 'next/image'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

import 'bootstrap/dist/css/bootstrap.css'

export default function comentarios() {
    return (
        <main>
            <Header/>
            <div className="container mt-5 py-5">
                <div className="d-flex justify-content-between align-items-center">
                    <h1>Comentarios</h1>
                    <div className="">
                        <button className="btn btn-success">Agregar comentario</button>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="row g-3">
                    <div className="col-md-6 col-lg-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <span className="h6">Liz Claudia</span>
                                    <small>hace un momento</small>
                                </div>
                                <p>Excelente Universidad</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <span className="h6">Luba</span>
                                    <small>hace 8 horas</small>
                                </div>
                                <p>Estoy en el Jira de Wurth</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <span className="h6">Ricardo</span>
                                    <small>hace 6 días</small>
                                </div>
                                <p>Arreglen las vulnerabilidades del SISA</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <span className="h6">Miriam</span>
                                    <small>hace 3 semanas</small>
                                </div>
                                <p>Los horarios de este cuatri están muy feos</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <span className="h6">Roy</span>
                                    <small>hace 1 mes</small>
                                </div>
                                <p>No sirve ningun aire acondicionado</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    )
}