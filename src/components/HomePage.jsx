import { useEffect, useState } from "react";

function HomePage() {
  return (
    <div>
      <div className=" border-8 p-20">
        <div>
          <h1 className=" text-7xl font-bold text-blue-600 text-left pb-3 pl-0">
            Bienvenido
          </h1>
          <p className=" text-white text-justify w-96">
            {" "}
            Mi nombre es Ivan Ballester, full-stack developer viviendo en España
            actualmente. Ahora mismo solo he trabajado en proyectos de
            aprendizaje enfocados con React.js en el front-end y Node.js en el
            back-end.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
