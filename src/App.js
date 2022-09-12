import React from "react";
import Rotas from "./services/routes.js";
import { GlobalStyle } from "./Global/style.js";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Rotas />
    </>
  );
}
