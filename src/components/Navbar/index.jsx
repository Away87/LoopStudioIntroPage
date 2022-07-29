import React,{useState, useEffect} from 'react'
import { useInterval } from 'usehooks-ts'

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

  useInterval(()=> window.innerWidth > 800 ? setMobileNavbarState(false) : setMobileNavbarState(true), 
  MobileNavbarState
  )

  useEffect(()=>{
    const pageYoffset = window.pageYoffset
    const pageXoffset = window.pageXoffset

    window.onscroll = ()=>{
      if (MobileNavbarState){
        window.scrollTo(pageXoffset, pageYoffset);
      }
    };
  }, [MobileNavbarState])

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