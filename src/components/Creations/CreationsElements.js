import styled from "styled-components"

export const Container = styled.div``

export const Heading = styled.h1`
    font-family: var(--ff-josefin);
    font-weight: lighter;
    font-size: var(--fs-m);
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 2em;
`

export const Container2 = styled.div`
        display: grid;
        gap: 2em;
        cursor: pointer;

    @media screen and (min-width:50em) {
        grid-template-columns: repeat(4, 1fr);
    }
`

export const CardContainer = styled.div`
    position: relative;

    &:hover{
        transform: scale(1.1);
        transition: transform 0.2s ease-in;
    }
`
export const Picture = styled.picture`
    background: linear-gradient(90deg, rgba(0,0,0,1), rgba(0,0,0,0.3));
    display: flex;
    width: 100%;
    & > * {
        width: 100%;
        object-fit: cover;
        object-position: center;
        opacity: 0.6;
    }
    
    @media screen and (min-width:50em) {
        width: 100%;
        max-width: 16em;
        background: var(--clr-black);
        
        & > * {
            opacity: 0.7;
            max-width: 100%;
        }
    }

`
export const Text = styled.h1`
    color: var(--clr-white);
    font-size: var(--fs-m);
    font-family: var(--ff-josefin);
    font-weight: lighter;
    text-transform: uppercase;

    position: absolute;
    bottom: 5%;
    left: 5%;
    z-index: 100;

    width: 50%;
    
    @media screen and (min-width: 50em) {
        font-size: var(--fs-sm);
        width: 100%;
    }
`