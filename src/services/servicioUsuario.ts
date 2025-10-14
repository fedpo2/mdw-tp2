import type { Usuario } from "../types/usuario";

export const ObtenerUsuarios = async (): Promise<Usuario[]> => {
    const usuario = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const usuJson: Usuario[] = await usuario.json();
    return usuJson;
};
