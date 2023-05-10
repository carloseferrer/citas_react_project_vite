const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  // Destructuring del objeto paciente
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;


  // Handle de eliminar donde mostramos un mensaje preguntando si desea eliminar el paciente
  const handleEliminar = () =>{
    const respuesta = confirm('Deseas eliminar el paciente?')

    // Si respuesta es true, llamamos a la funcion eliminarPaciente la cual elimina el paciente
    if (respuesta){
      eliminarPaciente(id)
    }
  }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>{" "}
        {/*normal case, se pone el texto normal no mayusculas ni minisculas*/}
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>{" "}
        {/*normal case, se pone el texto normal no mayusculas ni minisculas*/}
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>{" "}
        {/*normal case, se pone el texto normal no mayusculas ni minisculas*/}
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{fecha}</span>{" "}
        {/*normal case, se pone el texto normal no mayusculas ni minisculas*/}
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>{" "}
        {/*normal case, se pone el texto normal no mayusculas ni minisculas*/}
      </p>
      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setPaciente(paciente)} // Funcion flecha con la que enviamos al useState setPaciente(el objeto con los datos del paciente. Al mandarla como callback espera a que suceda el objeto un click antes de ejecutarse, esto gracias a que le pasamos un parametro)
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleEliminar} 
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
