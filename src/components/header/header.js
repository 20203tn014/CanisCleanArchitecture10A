import Image from 'next/image'
import Link from 'next/link'
export default function header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href={'/'}
            ><Image src="https://placehold.co/60x50/02ac89/FFF" alt="logotipo" 
            loader={({src}) => src}
              height={60}
              width={50}
          /></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" href="/onboarding">On boarding</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " href="/aboutus">Acerca de nosotros</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/noticias">Noticias</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blog">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./view/home.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./view/comments.html">Comentarios </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./view/contactanos.html">Contáctanos </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}