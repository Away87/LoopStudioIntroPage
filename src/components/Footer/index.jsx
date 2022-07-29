import React from 'react'
import {
    Container,
    Picture,
    Links,
    LinksLi,
    Social,
    SocialLi,
    Copyright
} from "./FooterElements.js"

import logo from "../../images/logo.svg"
import twitter from "../../images/icon-twitter.svg"
import facebook from "../../images/icon-facebook.svg"
import pinterest from "../../images/icon-pinterest.svg"
import instagram from "../../images/icon-instagram.svg"


const Footer = () => {
  return (
    <>
    <Container>
        <div>
            <Picture>
            <a href='#'><img src={logo} alt="loopstudio logo"/></a>
            </Picture>
            <Links>
                <LinksLi><a href="#">about</a></LinksLi>
                <LinksLi><a href="#">careers</a></LinksLi>
                <LinksLi><a href="#">events</a></LinksLi>
                <LinksLi><a href="#">products</a></LinksLi>
                <LinksLi><a href="#">support</a></LinksLi>
            </Links>
            <Social>
                <SocialLi><img src={twitter} alt="twitter" /></SocialLi>
                <SocialLi><img src={facebook} alt="facebook" /></SocialLi>
                <SocialLi><img src={pinterest} alt="pinterest" /></SocialLi>
                <SocialLi><img src={instagram} alt="instagram" /></SocialLi>
            </Social>
            <Copyright>© 2021 Loopstudios. All rights reserved.</Copyright>
        </div>
    </Container>
    </>
  )
}

export default Footer