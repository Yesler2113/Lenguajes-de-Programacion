import Patients from "./Patients"


const PatientsList = ({ citas, setCita }) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 bg-white mt-5 mx-5 p-3 rounded-md md:overflow-y-scroll md:h-screen">
        <h2 className="text-2xl text-indigo-600 text-center font-bold">
          Lista de Pacientes
        </h2>
        {citas.map( (cita, ) => (
          <Patients key={cita.id} cita = {cita} setCita= {setCita}/>
        ))}
        
    </div>
    
  )
}

export default PatientsList