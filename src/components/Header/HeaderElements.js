import styled from "styled-components"
import MobileBackgroundImg from "../../images/mobile/image-hero.jpg"
import DesktopBackgroundImg from "../../images/desktop/image-hero.jpg"

export const Container = styled.header`
    height: 35em;
    position: relative;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    &::before{
        content:"";
        display: block;
        position: absolute;
        top: 0%;
        right: 0;
        left: 0;
        bottom: 0;

        background-image: url(${MobileBackgroundImg});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    @media screen and (min-width:50em) {
        background-image: url(${DesktopBackgroundImg});
        justify-content: flex-start;
    }
`   

export const Heading = styled.h1`
    text-transform: uppercase;
    font-family: var(--ff-josefin);
    font-weight: lighter;
    font-size: var(--fs-m);
    color: var(--clr-white);

    outline: 2px solid white;
    padding: 0.5em;
    word-spacing: 100vw;
    
    width: 90%;
    min-width: 7.5em;
    max-width: 10em;
    margin-top: 3em;
    position: relative;

    span {
            font-family: var(--ff-josefin);
    }

    @media screen and (min-width:50em) {
        margin-left: 2em;
        width: 60%;
        max-width: 50em;

        span {
            word-spacing: normal;
        }
    }
`