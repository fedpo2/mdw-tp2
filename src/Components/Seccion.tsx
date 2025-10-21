import type { ReactNode } from "react";

interface Prop {
  children?: ReactNode;
}

export function Seccion({ children }: Prop) {
  return <div style={{ display: "flex", gap: "1rem" }}>{children}</div>;
}
