import { useEffect, useState } from 'react';
import './App.css';
import Alumno from './Components/Alumno';
import { ObtenerUsuarios } from './services/servicioUsuario';

function App() {
    const [loading, setLoading] = useState(true);
    const [alumnos, setAlumnos] = useState<any[]>([]);

    useEffect(() => {
        async function cargarDatos() {
            setLoading(true);
            try {
                const data = await ObtenerUsuarios();
                setAlumnos(data);
            } catch (error) {
                console.error('Error al obtener usuarios:', error);
            } finally {
                setLoading(false);
            }
        }

        cargarDatos();
    }, []);

    if (loading) return <div>Cargando...</div>;

    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', flexWrap: 'wrap', justifyContent: "center"}}>
            {alumnos.map((x) => (
                <Alumno key={x.id} data={x} />
            ))}
        </div>
    );
}

export default App;
