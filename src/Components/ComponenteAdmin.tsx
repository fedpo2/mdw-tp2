import { useEffect, useState } from "react";
import { ObtenerUsuarios } from "../services/servicioUsuario";
import type { Usuario } from "../types/usuario";

export function ComponenteAdmin() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    async function fetchUsuarios() {
      const data = await ObtenerUsuarios();
      setUsuarios(data);
    }
    fetchUsuarios();
  }, []);

  return (
    <>
      <h1>Panel Admin</h1>
      {usuarios.length > 0 && (
        <ul>
          {usuarios.map((x: Usuario) => (
            <li key={x.username}>{x.username}</li>
          ))}
        </ul>
      )}
    </>
  );
}
