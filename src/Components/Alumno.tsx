import { useEffect, useState } from "react";
import "./Alumno.css"

export default function Alumno(){
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
            <button onClick={() =>setAlumno({
                presente: alumno.presente ? false: true
            })}>
                toggle
            </button>
        </div>
    );
}
