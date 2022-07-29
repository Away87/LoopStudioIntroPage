import React from "react";
import { GlobalStyled } from "./GlobalStyled";

import Header from "./components/Header";
import About from "./components/About";
import Creations from "./components/Creations";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
    <GlobalStyled />
    <Header/>
    <main>
      <About/>
      <Creations/>
    </main>
    <footer>
      <Footer/>
    </footer>
    </>
  )
}

export default App