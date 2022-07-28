import React,{useState, useEffect} from 'react'

import {
    NavbarContainer,
    Picture,
    Bars,
    Cross,
    Links,
    LinksLi
} from "./NavbarElements.js"

import logo from "../../images/logo.svg"

const Navbar = () => {
  // To Toggle Mobile Navbar
  const [MobileNavbarState, setMobileNavbarState] = useState(false)
  
  useEffect(()=>{

  },[MobileNavbarState])

  return (
    <>
    <NavbarContainer isActive={MobileNavbarState}>
        <Picture>
          <a href='#'><img src={logo} alt="loopstudio logo"/></a>
        </Picture>
          {
            MobileNavbarState ? <Cross onClick={()=>setMobileNavbarState(false)}/> : <Bars onClick={()=>setMobileNavbarState(true)}/>
          }
          <Links isActive={MobileNavbarState}>
            <LinksLi><a href="#">about</a></LinksLi>
            <LinksLi><a href="#">careers</a></LinksLi>
            <LinksLi><a href="#">events</a></LinksLi>
            <LinksLi><a href="#">products</a></LinksLi>
            <LinksLi><a href="#">support</a></LinksLi>
          </Links>
    </NavbarContainer>
    </>
  )
}

export default Navbar