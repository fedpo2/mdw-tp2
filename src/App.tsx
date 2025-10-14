import { useEffect, useState } from 'react';
import './App.css'
import Alumno from './Components/Alumno'


 function App() {
     const [loading, setLoading] = useState(true);
     const [alumnos, setAlumnos] = useState<any[]>([]);

     useEffect(() => {
         fetch("https://jsonplaceholder.typicode.com/users")
             .then(res => res.json())
             .then(data => {
                 setAlumnos(data);
                 setLoading(false);
             })
             .catch(() => setLoading(false));
     }, []);

     if (loading) return <div>Cargando...</div>;

     return (
         <div style={{ display: 'flex', flexDirection: 'row', gap: "1rem", flexWrap: 'wrap' }}>
             {alumnos.map((x) => (
                 <Alumno key={x.id} data={x} />
             ))}
         </div>
     );
 }

export default App
