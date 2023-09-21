import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Image from 'next/image'
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
export default function index() {
  return (
    <main >
      <Header/>
      <div className="container-xl mt-5 py-5">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4">
          <div className="card">
            <Image
              src="https://placehold.co/200x200/02ac89/FFF"
              className="card-img-top"
              loader={({src}) => src}
              alt="..."
              height={200}
              width={200}
            />
            <div className="card-body">
              <div className="row">
                <div className="col-12 text-center text-md-start">
                  <h5 className="card-title">Desarrollo de software</h5>
                </div>
                <div className="col-12">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div className="col-12 text-center my-3">
                  <a href="#" className="btn btn-primary"
                    >Conoce más <i data-feather="send"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <div className="card">
            <Image
              src="https://placehold.co/200x200/02ac89/FFF"
              className="card-img-top"
              alt="..."
              loader={({src}) => src}
              height={200}
              width={200}
            />
            <div className="card-body">
              <div className="row">
                <div className="col-12 text-center text-md-start">
                  <h5 className="card-title">Diseño digital</h5>
                </div>
                <div className="col-12">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div className="col-12 text-center my-3">
                  <a href="#" className="btn btn-primary"
                    >Conoce más <i data-feather="send"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <div className="card">
            <Image
              src="https://placehold.co/200x200/02ac89/FFF"
              className="card-img-top"
              alt="..."
              loader={({src}) => src}
              height={200}
              width={200}
            />
            <div className="card-body">
              <div className="row">
                <div className="col-12 text-center text-md-start">
                  <h5 className="card-title">Diseño de modas</h5>
                </div>
                <div className="col-12">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div className="col-12 text-center my-3">
                  <a href="#" className="btn btn-primary"
                    >Conoce más <i data-feather="send"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </main>
  )
}
