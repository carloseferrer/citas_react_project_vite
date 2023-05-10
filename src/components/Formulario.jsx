import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  // State -- Nombre
  const [nombre, setNombre] = useState("");

  //State -- Propietario
  const [propietario, setPropietario] = useState("");

  //State -- Email
  const [email, setEmail] = useState("");

  //State -- Fecha de Alta
  const [fecha, setFecha] = useState("");

  //State -- Síntomas
  const [sintomas, setSintomas] = useState("");

  // State -- Error
  const [error, setError] = useState(false);

  // useEffect -- Para cuando sucede un cambio en el state
  useEffect(() => {
    if ( Object.keys(paciente).length > 0 ) {
      // Object.keys(paciente.length > 0 sirve para comprobar si el arreglo esta vacio o no)
      // Paciente es el objeto que se encuentra actualmente en memoria
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]); // Se ejecutas solo cuando paciente cambia

  const generarId = () => {
    // Codigo que genera un codigo random, el Math.random() genera numeros aleotorios con decimales, el toString lo convierte en String y el substring elimina los primeros dos elementos que son 0 y .
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  // Funcion del Evento onSubmit
  const HandleSubmit = (e) => {
    e.preventDefault();

    //Validación formulario
    // Generamos un arreglo y buscamos si algun elemento tiene un String vacio
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true); // Ponemos el state del error en true
      return;
    }
    setError(false); // Lo ponemos falso para que no se muestre el mensaje en caso de que se hayan corregido los datos

    // Una vez pasa la validacion se envia al state de Pacientes en el Objeto Paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      //Editando Registro -- Si paciente tiene id, significa que ya ha sido agregado
      objetoPaciente.id = paciente.id // Asignamos al ObjetoPaciente el id del paciente que ya tenemos al nuevo objeto que sera el editado
      
      //console.log(objetoPaciente); 
      //console.log(paciente); -- Objeto sin actualizar
      
      // recorremos el arreglo de pacientes el cual se representa con pacienteState, luego buscamos en el arreglo de objetos y verificamos si uno tiene un id igual al que viene por memoria, si es asi retorna el objeto editado
      const pacientesActualizado = pacientes.map((pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState))

      setPacientes(pacientesActualizado);
      // Lo limpiamos regresandolo a su estado original que es un objeto
      setPaciente({});

    } else {
      // Nuevo Registro
      objetoPaciente.id = generarId() // Generamos el Id ya que estamos haciendo un nuevo registro
      // con el spread operator ()...pacientes) obtenemos una copia de lo que hay en pacientes y enviamos el objetoPaciente con los datos de los pacientes
      setPacientes([...pacientes, objetoPaciente]);
    }

    // Reiniciamos el formulario
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      {" "}
      {/* w-1/2 (width: 50%)*/}
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className=" text-lg mt-5 mb-10 text-center">
        Añade Pacientes y{"  "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={HandleSubmit}
      >
        {/* Operador Ternario, si error es true dice que hay error, si no imprime lo otro*/}
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}{" "}
        {/*El signo && indica que si error es true imprime Si hay un error*/}{" "}
        {/* shadow-md para sombra y rounded-lg para que las esquinas sean redondeadas*/}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          {/*Block es display block, htmlFor es para que cuando le de click al label, este active el formulario*/}
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" /*w-full crea un width: 100%*/
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value); // Cada vez que se escriba en el input se va a ir guardando en el state
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          {/*Block es display block, htmlFor es para que cuando le de click al label, este active el formulario*/}
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" /*w-full crea un width: 100%*/
            value={propietario}
            onChange={(e) => {
              setPropietario(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          {/*Block es display block, htmlFor es para que cuando le de click al label, este active el formulario*/}
          <input
            id="email"
            type="email"
            placeholder="Email contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" /*w-full crea un width: 100%*/
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          {/*Block es display block, htmlFor es para que cuando le de click al label, este active el formulario*/}
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" /*w-full crea un width: 100%*/
            value={fecha}
            onChange={(e) => {
              setFecha(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Síntomas
          </label>
          {/*Block es display block, htmlFor es para que cuando le de click al label, este active el formulario*/}
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => {
              setSintomas(e.target.value);
            }}
          ></textarea>
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"} // Ternario que indica si existe hay id se coloca editar pacienta ya que significa que ya se han agregado pacientes, de lo contrario se coloca agregar
        />
      </form>
    </div>
  );
};

export default Formulario;
