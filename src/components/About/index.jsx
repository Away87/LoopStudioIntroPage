import React from 'react'
import {
    Container,
    Picture,
    TextArea,
    Heading,
    Paragraph
} from "./AboutElements.js"

import MobileImg from "../../images/mobile/image-interactive.jpg"
import DesktopImg from "../../images/mobile/image-interactive.jpg"

const About = () => {
  return (
    <>
    <Container>
        <Picture>
            <img src={MobileImg} alt="A man with VR"/>
        </Picture>
        <TextArea>
            <Heading>The leader in interactive VR</Heading>
            <Paragraph>
            Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand. 
            </Paragraph>
        </TextArea>
    </Container>
    </>
  )
}

export default About