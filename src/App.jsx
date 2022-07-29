import React from "react";
import { GlobalStyled } from "./GlobalStyled";

import Header from "./components/Header";
import About from "./components/About";
import Creations from "./components/Creations";


const App = () => {
  return (
    <>
    <GlobalStyled />
    <Header/>
    <main>
      <About/>
      <Creations/>
    </main>
    </>
  )
}

export default App