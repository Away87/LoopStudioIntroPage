import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;


    @media screen and (min-width:50em){
        header {
            /* border: 2px solid green; */
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
    }
`

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
        margin-bottom: 5em;

    @media screen and (min-width:50em) {
        grid-template-columns: repeat(4, 1fr);
    }
`

export const CardContainer = styled.div`
    position: relative;

    &:hover > picture {
        background: none;
        opacity: 0.5;
        transition: opacity 200ms ease-in;
    }

    &:hover > h1 {
        color: var(--clr-black);
        transition: all 200ms ease-in;
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

export const Button = styled.button`
    width: 60%;
    height: 3em;

    background: none;
    border: 2px solid black;
    font-size: var(--fs-s);
    text-transform: uppercase;
    letter-spacing: 0.3em;
    word-spacing: 0.5em;

    max-width: 15em;
    cursor: pointer;

    &:hover {
        background-color: var(--clr-black);
        color: var(--clr-white);
        transition: all 200ms ease-in;
    }
`