import type { ReactNode } from "react";
import { Navigate, Outlet } from "react-router";

interface RutaProtegidaProp {
  estaPermitido: boolean;
  children?: ReactNode;
  redirectTo?: string;
}

export function RutaProtegida({
  estaPermitido,
  children,
  redirectTo = "/home",
}: RutaProtegidaProp) {
  if (!estaPermitido) return <Navigate to={redirectTo}></Navigate>;

  return children ? children : <Outlet />;
}
