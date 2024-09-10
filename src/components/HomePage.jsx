import portatil from "../assets/portatil.jpg";

function HomePage() {
  return (
    <div>
      <div className="bg-custom-blue p-10 flex justify-evenly">
        <div>
          <h1 className="text-white text-7xl font-bold text-left pb-10">
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
          <button className=" m-7 p-3 bg-blue-300 rounded-lg">
            <a href="/cv.pdf" download="IvanBallesterCV.pdf">
              Descargar CV
            </a>
          </button>
        </div>
        <img
          src={portatil}
          alt="image"
          width={400}
          style={{ borderRadius: "30%" }}
        />
      </div>

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

      <h1 className=" text-center m-5 font-bold text-xl">MIS PROYECTOS</h1>
      <div className=" flex justify-center">
        <div className=" border-2 p-4 w-96 m-4">
          <img src="" alt="" />
          <h2 className=" font-bold">TrueFilms</h2>
          <p>
            Este es mi proyecto final de Bootcamp, donde desarrollo todo lo
            aprendido. Está basado en un trabajo MERN Full-Stack{" "}
          </p>
        </div>
        <div className=" border-2 p-4 w-96 m-4">
          <img src="" alt="" />
          <h2 className=" font-bold">TrueFilms</h2>
          <p>
            Este es mi proyecto final de Bootcamp, donde desarrollo todo lo
            aprendido. Está basado en un trabajo MERN Full-Stack{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
