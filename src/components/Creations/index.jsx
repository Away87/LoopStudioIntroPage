import React,{useEffect} from 'react'
import { 
    Container,
    Heading,
    Container2,
    CardContainer,
    Picture,
    Text
} from './CreationsElements'

import { Cards } from './cards'

const Card = (val, key) => {
    useEffect(() => {
        const text = document.querySelectorAll("#text")
        text.forEach(element=>{
            const textWords = element.textContent.split(" ")
            if (textWords.length === 2) {
                element.style.wordSpacing = "100vw"
            }
        })
    }, []);

  return (
    <>
        <CardContainer>
            <Picture>
                <source srcSet={val.DesktopImage} alt={val.text} media="(min-width:50em) " />
                <img src={val.Mobileimage} alt={val.text}/>
            </Picture>
            <Text id='text'>{val.text}</Text>
        </CardContainer>
    </>
  )
}

const Creations = () => {
  return (
    <>
    <Container>
        <Heading>our creations</Heading>

        <Container2>
            {Cards.map(Card)}
        </Container2>

    </Container>
    </>
  )
}



export default Creations