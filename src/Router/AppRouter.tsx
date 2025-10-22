import type { Usuario } from "../types/usuario";
import { Routes } from "react-router";
import { Route } from "react-router";
import { Navigate } from "react-router";
import { RutaProtegida } from "./RutaProtegida";
import { ComponenteAdmin } from "../Components/ComponenteAdmin";
import { Dashboard } from "../Components/Dashboard";
import Login from "../Components/Login";

interface prop {
    usuario: Usuario | null
    setUsuario: any
}

export function AppRouter({usuario, setUsuario}: prop) {
  return (
    <Routes>
      <Route path="/login" element={<Login setUsuario={setUsuario} />} />
      <Route element={<RutaProtegida estaPermitido={!!usuario} redirectTo="/login"/>}>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/about" element={<h1>About</h1>}></Route>
        <Route path="/productos" element={<h1>Productos</h1>}></Route>
      </Route>
      <Route
        path="/admin"
        element={
          <RutaProtegida
            estaPermitido={
              !!usuario && usuario.permissionLevel.includes("ADMIN")
            }
            redirectTo="/login"
          >
            <ComponenteAdmin></ComponenteAdmin>
          </RutaProtegida>
        }
      ></Route>
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
