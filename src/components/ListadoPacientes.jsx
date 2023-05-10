//ListadoPacientes componente
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {" "}
      {/* Operador Ternario para retornar informacion en caso de que haya o no Pacientes registrados */}
      {pacientes && pacientes.length ? (
        <>
          {/* Con h-screen forzamos a que sea el 100vh y con overflow-y(de arriba hacia abajo por el eje y)-scroll hacemos que aparezca un scroll de los elementos Paciente*/}{" "}
          {/* lg es para pantallas grandes*/}
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className=" text-lg mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente} // Enviamos paciente que contiene a los elementos del arreglo
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className=" text-lg mt-5 mb-10 text-center">
            Comienza agregando pacientes {""}
            <span className="text-indigo-600 font-bold">
              y aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
