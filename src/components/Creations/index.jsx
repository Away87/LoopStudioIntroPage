import React,{useEffect, useState} from 'react'
import { useInterval } from 'usehooks-ts'
import { 
    Container,
    Heading,
    Container2,
    CardContainer,
    Picture,
    Text,
    Button
} from './CreationsElements'

import { Cards } from './cards'

const Card = (val, key) => {
    useEffect(() => {
        const text = document.querySelectorAll(".text")
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
            <Text className='text'>{val.text}</Text>
        </CardContainer>
    </>
  )
}

const Creations = () => {
    const [MobileSize, setMobileSize] = useState(undefined)
    useInterval(()=>{
        window.innerWidth > 800 ? setMobileSize(false) : setMobileSize(true)
    }, 100)

  return (
    <>
    <Container>
        <header>
            <Heading>our creations</Heading>
            {MobileSize ? null : <Button>see all</Button>}
        </header>

        <Container2>
            {Cards.map(Card)}
        </Container2>

        {MobileSize && <Button>see all</Button>}

    </Container>
    </>
  )
}



export default Creations