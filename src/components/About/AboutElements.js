import styled from "styled-components"

export const Container = styled.div`
    position: relative;

    display: grid;
    gap: 3em;
    margin-top: 5em;

    @media screen and (min-width: 50em){
        grid-template-columns: repeat(2, 1fr);
    }
`

export const Picture  = styled.picture`
    display: flex;
    justify-content: center;
    & > * {
        width: 70%;
        min-width: 15em;
        max-width: 40em;
        object-fit: cover;
        object-position: center;
    }

    @media screen and (min-width:50em){
        & > * {
            width: 100%;
        }
    }

    @media screen and (min-width:76em){
        & > * {
            width: 70%;
            min-width: 35em;
            max-width: 45em;
        }
    }
    
`
export const TextArea = styled.div`
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;

    & > * {
        text-align: center;
    }

    @media screen and (min-width:50em){

    }

    @media screen and (min-width:76em){
        width: 50%;
        position: absolute;
        bottom: 0;
        right: clamp(0% , 12vw + 0.5rem, 10%);
        max-height: 30em;
        padding: 5em 0 0 5em;
        background-color: var(--clr-white);
    }
`

export const Heading = styled.h1`
    text-transform: uppercase;
    font-family: var(--ff-josefin);
    font-weight: lighter;
    font-size: var(--fs-m);
    
    @media screen and (min-width: 50em){
        font-size: var(--fs-sm);
    }
`

export const Paragraph = styled.p`
    color: var(--clr-dark-grey);
    font-size: var(--fs-s);
`


