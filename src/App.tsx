import './App.css'
import Alumno from './Components/Alumno'

function App() {

  return (
    <>
        <div style={{ display: 'flex', flexDirection: 'row' , gap: "1rem"}}>
            <Alumno />
            <Alumno />
        </div>
    </>
  )
}

export default App
