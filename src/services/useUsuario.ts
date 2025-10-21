import { useState } from "react";
import type { PermissionLevel, Usuario } from "../types/usuario";

export const useUsuario = () => {
  const [usuario, setUsuario] = useState<Usuario>({
    id: 1,
    name: "Juan Pepe",
    username: "jpepe",
    email: "",
    permissionLevel: ["GUEST"],
  });

  function setPermissionLevel(arg: PermissionLevel) {
    setUsuario({ ...usuario, permissionLevel: [arg] });
  }

  return {
    usuario,
    setPermissionLevel,
  };
};
