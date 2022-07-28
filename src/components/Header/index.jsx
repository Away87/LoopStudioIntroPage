import React from 'react'
import { useInterval } from 'usehooks-ts'
import Navbar from '../Navbar'
import {
    Container,
    Heading
} from "./HeaderElements"

const Header = () => {

  // useInterval(()=>{

  // })

  return (
    <Container>
        <Navbar/>
        <Heading>immersive experiences <span>that deliver</span></Heading>
    </Container>
  )
}

export default Header