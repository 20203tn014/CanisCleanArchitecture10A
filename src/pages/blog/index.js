import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'

export default function blog(){
    return (
        <main>
            <Header></Header>
              <div className="container-fluid " style={{margin: '20px'}}>
        <h1 style={{textAlign:'center'}}>NOTICIAS</h1>
        <hr/>
        <br/>
        <div className="row">
            <div className="col-4">
                <div className="card" style={{width: '18rem'}}>
                    <img src="https://www.jornada.com.mx/ultimas/2023/09/08/amlo-arriba-a-colombia-a-reunion-con-gustavo-petro-1192.html/amlo-colombiano.jpg-1044.html/image_large?bc=2023-09-08T18:24:07-05:00" 
                    className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Noticia 1</h5>
                      <p className="card-text">A bordo de una aeronave de la Fuerza Aérea Mexicana, el mandatario aterrizó alrededor de las 16:30 local en el aeropuerto</p>
                      <a href="#" className="btn btn-primary">Ver más</a>
                    </div>
                  </div>
            </div>
            <div className="col-4">
                <div className="card" style={{width: '18rem'}}>
                    <img src="https://www.elfinanciero.com.mx/resizer/QULmxPFCYUlNsKhf430sMskESFk=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/6V6GZZROIZACFNIKTZ7I4REPFM.jpg" 
                    className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Noticia 2</h5>
                      <p className="card-text">Some quick example text to build on the Noticia  and make up the bulk of the card&apos;s content.</p>
                      <a href="#" className="btn btn-primary">Ver más</a>
                    </div>
                  </div>
            </div>
            <div className="col-4">
                <div className="card" style={{width: '18rem'}}>
                    <img src="https://aristeguinoticias.com/_next/image/?url=https%3A%2F%2Feditorial.aristeguinoticias.com%2Fwp-content%2Fuploads%2F2023%2F09%2Fsismo-collima-jalisco-08092023.jpg&w=1200&q=75" 
                    className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Noticia 3</h5>
                      <p className="card-text">Some quick example text to build on the Noticia  and make up the bulk of the card&apos;s content.</p>
                      <a href="#" className="btn btn-primary">Ver más</a>
                    </div>
                  </div>
            </div>

        </div>
        <div className="row" style={{marginTop: '30px'}}>
            <div className="col-4">
                <div className="card" style={{width: '18rem'}}>
                    <img src="https://images.milenio.com/LCDT8eJryK68pdjXdMckDx9TSbg=/942x532/uploads/media/2023/09/08/abogado-uriel-carmona-traslado-penal_70_0_1140_720.jpeg" 
                    className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Noticia 4</h5>
                      <p className="card-text">Some quick example text to build on the Noticia  and make up the bulk of the card&apos;s content.</p>
                      <a href="#" className="btn btn-primary">Ver más</a>
                    </div>
                  </div>
            </div>
            <div className="col-4">
                <div className="card" style={{width:'18rem'}}>
                    <img src="https://www.eleconomista.com.mx/__export/1687215584179/sites/eleconomista/img/2020/04/16/dolares_ok.jpg_673822677.jpg" 
                    className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Noticia 5</h5>
                      <p className="card-text">El peso mexicano se depreció frente al dólar estadounidense este miércoles.</p>
                      <a href="#" className="btn btn-primary">Ver más</a>
                    </div>
                  </div>
            </div>
            <div className="col-4">
                <div className="card" style={{width: '18rem'}}>
                    <img src="https://i0.wp.com/tucochinito.com/wp-content/uploads/2021/02/simbolo-dolar-origen-mexicano.jpg?fit=1024%2C576&ssl=1" 
                    className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Noticia 6</h5>
                      <p className="card-text">El símbolo del dólar hoy en día se representa así $ y es una representación gráfica que se usa</p>
                      <a href="#" className="btn btn-primary">Ver más</a>
                    </div>
                  </div>
            </div>
            
        </div>
    </div>
    <Footer></Footer>
        </main>
    )
}