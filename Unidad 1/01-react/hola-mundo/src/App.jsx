import Form from "./Components/Form"
import Header from "./Components/Header"
import PatientsList from "./Components/PatientsList"
import { useState } from "react"


function App() {

  const [citas, setCitas] = useState([]);
  const [cita, setCita] = useState({});

  return (
   <div className="container mx-auto mt-8">
     <Header
        
     />
     <div className="md:flex mt-10">
        <Form
          citas={citas}
          setCitas={setCitas}
          cita={cita}
          setCita={setCita}
        />  
        <PatientsList
          citas={citas}
          setCita={setCita}
        />  
     </div>
      
   </div>
  )
}

export default App
