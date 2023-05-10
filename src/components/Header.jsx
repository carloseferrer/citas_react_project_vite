// Header component
import React from "react";

function Header() {
  return (
    <>
      <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto"> {/*md:2/3 actua como mediaquery para el tamaño de la pantalla*/}
        Seguimiento Pacientes{' '}<span className="text-indigo-600">Veterinaria</span>
      </h1>
    </>
  );
}

export default Header;
