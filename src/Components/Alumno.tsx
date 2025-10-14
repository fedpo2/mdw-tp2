import { useState } from "react";
import "./Alumno.css"
import type { Usuario } from "../types/usuario";

export default function Alumno({data}: {data: Usuario}){
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

                <p style={{ color: "gray" }}>
                    Usuario: <b>{data.username}</b>
                </p>

                <p style={{ color: "gray" }}>
                    Usuario: <b>{data.email}</b>
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
