import './App.css';
import julieta from './assets/julieta.jpg'; // guardá tu foto en src/assets
import htmlIcon from './assets/icons/html-5_5968267.ico';
import cssIcon from './assets/icons/css_919826.ico';
import jsIcon from './assets/icons/javascript_15525512.ico';
import nodeIcon from './assets/icons/nodejs.ico';
import mysqlIcon from './assets/icons/database_16550682.ico';


function App() {
    return (
        <div className="container">

            {/* Sección de presentación con diseño actualizado */}
            <section className="presentacion">
                <div className="contenido">
                    <div className="texto">
                        <h1>¡Hola! Mi nombre es Julieta Gonella.</h1>
                        <p className="intro">
                        Soy estudiante de Analista en Sistemas, entusiasta del desarrollo web y con experiencia en HTML, 
                        CSS y JavaScript. Me gusta aprender, asumir desafíos y trabajar en equipo, siempre buscando crecer 
                        y aportar con creatividad.
                        </p>
                    </div>
                    <div className="foto">
                        <img src={julieta} alt="Julieta Gonella" />
                    </div>
                </div>
            </section>

            <div className="botones-derecha">
                <a
                    href="https://w.app/34kku8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-contacto"
                >
                    Contacto
                </a>
                <a href="/cv.pdf" className="btn" download>Mi CV</a>
            </div>

            {/* Sección de proyectos */}
            <section className="trabajos">
                <h2>Mis trabajos</h2>
                <div className="card-proyecto">
                    <h3>Proyecto Sodería</h3>
                    <p>
                        Aplicación web diseñada para gestionar de forma eficiente el funcionamiento de una
                        sodería. Permite registrar y administrar clientes, productos y pedidos, facilitando el
                        control de las entregas y el seguimiento de cada orden. El sistema está pensado para ser utilizado tanto por el administrador como por los
                        repartidores, con un enfoque en la organización y la simplicidad.
                    </p>
                    <h4>Tecnologías usadas:</h4>
                    <div className="iconos-tecnologias">
                        <img src={htmlIcon} alt="HTML" title="HTML" />
                        <img src={jsIcon} alt="JavaScript" title="JavaScript" />
                        <img src={cssIcon} alt="CSS" title="CSS" />
                        <img src={nodeIcon} alt="Node.js" title="Node.js" />
                        <img src={mysqlIcon} alt="MySQL" title="MySQL" />
                    </div>

                    <div className="botones">
                        <a
                            href="https://drive.google.com/file/d/1qzxWkgmTBpMAlPRdE-_PQPtuT9K1qtlT/view?usp=drive_link"
                            className="btn-secundario"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Imágenes
                        </a>

                        <a
                            href="https://github.com/JulietaGonella/soderia.git"  // ← reemplazá con tu link real
                            className="btn-secundario"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;