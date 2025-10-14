import { useState } from "react";
import "./Alumno.css"

export default function Alumno({data}: {data: any}){
    const [alumno, setAlumno] = useState({ presente: false });
    return (
        <div id="aa"
        className = {`alumno b ${alumno.presente ? "b-rojo" : "b-verde"}`}
        >
            {(alumno.presente === true ? (
                <p>
                    Presente
                </p>
            ) : (
                <p>
                    Ausente
                </p>
            ))}

            <hr />
            <div style={{ display: 'flex', flexDirection: 'column', gap:"10px" }}>
                <p>
                    Nombre: <b>{data.name}</b>
                </p>
                <p>
                    Usuario: <b>{data.username}</b>
                </p>
            </div>
            <hr />

            <button onClick={() => setAlumno({
                presente: alumno.presente ? false: true
            })}>
                toggle
            </button>
        </div>
    );
}
