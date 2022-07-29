import React from "react";
import { GlobalStyled } from "./GlobalStyled";

import Header from "./components/Header";
import About from "./components/About";


const App = () => {
  return (
    <>
    <GlobalStyled />
    <Header/>
    <main>
      <About/>
    </main>
    </>
  )
}

export default App