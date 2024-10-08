import portatil from "../assets/portatil.jpg";
import portada from "../assets/portada.png";
import img1 from "../assets/linkedin.png";
import img2 from "../assets/icon.png";
import web from "../assets/web.png";
import img3 from "../assets/github.png";
import img4 from "../assets/star.jpg";

function HomePage() {
  return (
    <div className=" font-serif">
      <header className="bg-custom-blue p-10 flex justify-evenly">
        <div>
          <h1 className="text-white text-4xl  sm:text-5xl md:text-6xl lg:text-7xl font-bold text-left pb-10 ">
            Bienvenido
          </h1>
          <p className="text-white text-justify max-w-xl">
            Mi nombre es Iván Ballester, soy desarrollador full-stack residente
            en España. Actualmente, mi experiencia está centrada en el
            desarrollo de proyectos de aprendizaje utilizando tecnologías
            modernas como React.js en el front-end y Node.js en el back-end.
          </p>
          <br />
          <p className="text-white text-justify max-w-xl">
            He trabajado en la construcción de aplicaciones web dinámicas,
            enfocándome en la creación de interfaces de usuario interactivas y
            eficientes, así como en el diseño de arquitecturas escalables y
            robustas del lado del servidor. Estoy constantemente aprendiendo y
            adaptándome a las últimas tendencias del desarrollo full-stack, con
            el objetivo de mejorar mis habilidades y contribuir de manera eficaz
            en proyectos reales.
          </p>
          <button className="mt-7 p-3 bg-blue-300 rounded-lg">
            <a href="/cv1.pdf" download="Ivan Ballester FullStack 2024.pdf">
              Descargar CV
            </a>
          </button>
        </div>
        <img
          src={portatil}
          alt="image"
          width={400}
          style={{ borderRadius: "30%" }}
          className="hidden lg:block"
        />
      </header>
      <svg
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1487 79" // Añadir este atributo es clave
        preserveAspectRatio="none" // Este atributo asegura que el SVG se escale adecuadamente
      >
        <path
          d="M-100 79C-100 79 218.416 23.165 693.5 23.165C1168.58 23.165 1487 79 1487 79V0H-100V79Z"
          fill="#07131F"
        />
      </svg>
      <h1 className=" text-center m-5 font-bold text-3xl">MIS PROYECTOS</h1>
      <div className=" flex flex-row flex-wrap justify-center">
        <div className=" border-2 p-4 w-80 sm:w-96 m-4 rounded-xl shadow-2xl">
          <img src={portada} alt="img" className=" h-2/6 w-full" />
          <h2 className=" font-bold pt-3">TrueFilms</h2>
          <p className="mb-5">
            Este es mi proyecto final del Bootcamp, en el que aplico y
            desarrollo todo lo aprendido a lo largo del curso. El proyecto está
            construido utilizando el stack MERN (MongoDB, Express, React,
            Node.js), lo que me permite abordar tanto el desarrollo front-end
            como back-end. A través de este trabajo, demuestro mis habilidades
            como desarrollador full-stack, implementando soluciones completas e
            integradas que abarcan desde la creación de interfaces de usuario
            dinámicas hasta la gestión eficiente de bases de datos y APIs.
          </p>
          <div className="flex-wrap">
            <p className="bg-yellow-300 border rounded-md p-0.5 mr-1 inline-block ">
              React
            </p>
            <p className="bg-yellow-300 border rounded-md p-0.5 mr-1 inline-block">
              JavaScript
            </p>
            <p className="bg-yellow-300 border rounded-md p-0.5 mr-1 inline-block">
              Node.js
            </p>
            <p className="bg-yellow-300 border rounded-md p-0.5 mr-1 inline-block">
              Express.js
            </p>
            <p className="bg-yellow-300 border rounded-md p-0.5 mr-1 inline-block">
              MongoDB
            </p>
          </div>
          <div className=" flex row-auto items-center justify-between">
            <a href="https://truefilms.netlify.app/">
              <img src={web} alt="" width={30} className=" mt-5" />
            </a>
            <div className="flex">
              <a href="https://github.com/ivanballester/OlimpoCinematografico-client">
                <img src={img3} alt="Cliente" width={30} className=" mt-5" />
              </a>
              <a href="https://github.com/ivanballester/OlimpoCinematografico-server">
                <img src={img3} alt="Cliente" width={30} className=" mt-5" />
              </a>
            </div>
          </div>
        </div>
        <div className=" border-2 p-4 w-80 sm:w-96 m-4 rounded-xl shadow-2xl">
          <img src={img4} alt="img" className=" h-2/6 w-full" />
          <h2 className=" font-bold pt-3">Star Atropellao</h2>
          <p className="mb-5">
            {" "}
            Este es mi primer proyecto, donde utilizo JavaScript, HTML y CSS
            para crear un videojuego web. A lo largo de este trabajo, aplico los
            conceptos fundamentales de manipulación del DOM, lo que me permite
            interactuar con los elementos de la página de manera dinámica. El
            proyecto consiste en un juego sencillo pero funcional, donde el
            jugador puede interactuar con los gráficos y los controles a través
            de eventos en el navegador. Este proyecto me ayudó a mejorar mis
            habilidades en programación con JavaScript.
          </p>
          <div className="flex-wrap">
            <p className="bg-yellow-300 border rounded-md p-0.5 mr-1 inline-block ">
              JavaScript
            </p>
            <p className="bg-yellow-300 border rounded-md p-0.5 mr-1 inline-block">
              HTML
            </p>
            <p className="bg-yellow-300 border rounded-md p-0.5 mr-1 inline-block">
              CSS
            </p>
            <p className="bg-yellow-300 border rounded-md p-0.5 mr-1 inline-block ">
              DOM Manipulation
            </p>
            <p className="bg-yellow-300 border rounded-md p-0.5 mr-1 inline-block ">
              Git
            </p>
          </div>

          <div className=" flex row-auto items-center justify-between">
            <a href="https://ivanballester.github.io/STAR-ATROPELLADO/">
              <img src={web} alt="" width={30} className=" mt-5" />
            </a>
            <div className="flex">
              <a href="https://github.com/ivanballester/STAR-ATROPELLADO">
                <img src={img3} alt="Cliente" width={30} className=" mt-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <svg
        className="w-full h-auto block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1487 79"
        preserveAspectRatio="none"
      >
        <path
          d="M-100 0C-100 0 218.416 55.835 693.5 55.835C1168.58 55.835 1487 0 1487
      0V79H-100V0Z"
          fill="#07131F"
        />
      </svg>
      <footer className="  bg-custom-blue flex row justify-around p-10 m-0">
        <h1 className=" text-white">© 2024 ivanballester.netlify.app</h1>

        <h1 className="flex ">
          <a
            href="https://www.linkedin.com/in/ivanballester/"
            className="text-white pr-3"
          >
            <img src={img1} alt="" width={30} />
          </a>
          <a
            href="https://github.com/ivanballester"
            className="text-white pl-3"
          >
            <img src={img2} alt="" width={30} />
          </a>
        </h1>
      </footer>
    </div>
  );
}

export default HomePage;
