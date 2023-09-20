export default function header(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="./index.html"
            ><img src="https://placehold.co/60x50/02ac89/FFF" alt="logotipo"
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
                <a className="nav-link" href="./view/onboarding.html">On boarding </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="./view/aboutus.html">
                  Acerca de nosotros</a
                >
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./view/noticias.html">Noticias</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./blog.html">Blog</a>
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