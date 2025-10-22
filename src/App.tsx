import "./App.css";
import { Link } from "react-router";
import { AppRouter } from "./Router/AppRouter";
import { Navbar } from "./Components/NavBar";
import { useUsuario } from "./services/useUsuario";
import { Seccion } from "./Components/Seccion";
import type { PermissionLevel } from "./types/usuario";

function App() {
  const { usuario, setPermissionLevel } = useUsuario();
  return (
    <>
      <Navbar>
        <Seccion>
          <Link to="/home">Home</Link>
          {usuario?.permissionLevel.includes("ADMIN") && (
            <Link to="/admin">Admin</Link>
          )}
          <Link to="/analytics">analytics</Link>
          <Link to="/about">About</Link>
        </Seccion>
        <Seccion>
          El permiso el usuario es:
          <select
            value={usuario?.permissionLevel[0] || "GUEST"}
            onChange={(e) =>
              setPermissionLevel(e.target.value as PermissionLevel)
            }
          >
            <option value="ADMIN">ADMIN</option>
            <option value="USER">USER</option>
            <option value="GUEST">GUEST</option>
          </select>
        </Seccion>
      </Navbar>
      <AppRouter usuario={usuario} />
    </>
  );
}

export default App;
