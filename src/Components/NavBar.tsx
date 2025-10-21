import React, { type ReactNode } from "react";

type NavbarProps = {
  children?: ReactNode;
};

export const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100vdw",
        backgroundColor: "black",
        zIndex: 10,
        display: "flex",
        justifyContent: "space-between",
        padding: "0 1rem",
        gap: "1rem",
      }}
    >
      {children}
    </nav>
  );
};
