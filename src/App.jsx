import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import { useState, useEffect } from "react";

function App() {
  // State con los datos de los Pacientes
  const [pacientes, setPacientes] = useState([]);

  // State con el cual se hace el edit y delete
  const [paciente, setPaciente] = useState({});

  // Este obtiene lo que haya en local Storage
  useEffect(() => {
    const obtenerLS = () => {
      // Con JSON.parse se transforma a arreglo
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? []; // Si no hay nada en localStorage agregamos un arreglo vacio
      setPacientes(pacientesLS);
    };
    obtenerLS(); // llamamos a la funcion
  }, []); // carga una sola vez cuando este listo

  // useEffect para el local storage -- Sincroniza el state con lo que haya en el paciente
  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes)); // Convertimos el arreglo pacientes en string con JSON.stringify
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    ); // Nos traemos todos los que son diferentes al id que estamos pasando, de esta forma eliminamos el que sea igual al id viene como parametro(id del que se le da a eliminar)

    setPacientes(pacientesActualizados); // modificamos el state para mostrar los pacientes
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
