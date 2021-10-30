import { Children, ReactNode } from "react";
import { AuthProvider } from "./Auth/auth";

interface Children {
  children: ReactNode;
}

const Provider = ({ children }: Children) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Provider;
