import './App.css';
import julieta from './assets/julieta.jpg'; // guardá tu foto en src/assets

function App() {
    return (
        <div className="container">

            {/* Sección de presentación con diseño actualizado */}
            <section className="presentacion">
                <div className="contenido">
                    <div className="texto">
                        <h1>¡Hola! Mi nombre es Julieta Gonella.</h1>
                        <p className="intro">
                            Soy estudiante en analista en sistema y entusiasta del desarrollo web.
                            Me encanta aprender cosas nuevas y enfrentar desafíos que me ayuden a crecer profesionalmente.
                        </p>
                        <h2>Descripcion personal</h2>
                        <p className="descripcion">
                            Soy una persona curiosa, responsable y con muchas ganas de seguir creciendo en el mundo del desarrollo web.
                            Me encuentro estudiando para ser Analista en Sistemas, y mientras tanto voy adquiriendo experiencia
                            a través de proyectos y prácticas que me ayudan a aplicar lo aprendido.
                            <br /><br />
                            Me interesa especialmente el diseño de interfaces intuitivas, la programación del lado del cliente y el trabajo en equipo.
                            Hasta la actualidad aprendí tecnologías como HTML, CSS, JavaScript y me entusiasma seguir avanzando
                            con frameworks y herramientas modernas.
                            <br /><br />
                            Busco oportunidades para poner en práctica mis conocimientos, seguir aprendiendo y aportar valor
                            desde mi compromiso y creatividad.
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
                    <ul>
                        <li>HTML</li>
                        <li>JavaScript</li>
                        <li>CSS</li>
                        <li>Node JS</li>
                        <li>MySQL</li>
                    </ul>
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