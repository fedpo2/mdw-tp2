import { useEffect, useState } from "react";
import type { Usuario } from "../types/usuario";
import { Routes } from "react-router";
import { Route } from "react-router";
import { Navigate } from "react-router";
import { RutaProtegida } from "./RutaProtegida";
import { ComponenteAdmin } from "../Components/ComponenteAdmin";
import { Dashboard } from "../Components/Dashboard";

export function AppRouter({usuario}: {usuario: Usuario}) {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/home" element={<Dashboard />} />
      <Route element={<RutaProtegida estaPermitido={!!usuario} />}>
        <Route path="/about" element={<h1>About</h1>}></Route>
        <Route path="/analytics" element={<h1>Estadisticas</h1>}></Route>
      </Route>
      <Route
        path="/admin"
        element={
          <RutaProtegida
            estaPermitido={
              !!usuario && usuario.permissionLevel.includes("ADMIN")
            }
            redirectTo="/home"
          >
            <ComponenteAdmin></ComponenteAdmin>
          </RutaProtegida>
        }
      ></Route>
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  );
}
