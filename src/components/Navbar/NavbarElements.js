import styled,{keyframes} from "styled-components"
import {FaBars} from "react-icons/fa"
import {ImCross} from "react-icons/im"

const GrowFromCenter = keyframes`
    0% {
        left:50%;
        width: 0;
    }

    100% {
        left:0;
        width: 100%;
    }
`

export const NavbarContainer = styled.nav`
    background-color: ${props => props.isActive ? "var(--clr-black)" : "transparent"};
    height: ${props => props.isActive ? "100vh" : "5em"};
    position: absolute;
    top:0;
    left:0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: flex-start;
    
    & > * {
        margin-top: 1.6rem;
    }

    @media screen and (min-width:50em){
        height: 5em;
        justify-content: space-evenly;
        bottom: 0;
        align-items: center;

        & > * {
        margin-top: 0;
        }
    }

`
export const Picture = styled.picture`
    margin-left: 1.5em;
    width: 30%;
    min-width: 10em;
    & > * {
        cursor: pointer;
        width: 10em;
    }
`

export const Bars = styled(FaBars)`
    color:var(--clr-white);
    font-size:1.8rem;
    margin-right: 1em;
    cursor: pointer;
    @media screen and (min-width:50em){
        display: none;
    }
`

export const Cross = styled(ImCross)`
    color:var(--clr-white);
    font-size:1.8rem;
    margin-right: 1em;
    cursor: pointer;
    @media screen and (min-width:50em){
        display: none;
    }
`

export const Links = styled.ul`
    max-width: 30em;
    margin-left: 1.5em;
    display: ${props => props.isActive ? "flex" : "none"};
    justify-content: space-between;
    flex-direction: column;
    gap: clamp(1em, 1vw + 0.05em, 5em);
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    line-height: 2.5em;
    margin-top: 0;
    @media screen and (min-width:50em){
        display: flex;
        justify-content: space-evenly;
        position: static;
        flex-direction: row;
        line-height: 0;
        width: 50%;
    }
    `
export const LinksLi = styled.li`
    position: relative;
    text-transform: capitalize;
    white-space: nowrap;
    cursor: pointer;

    font-family: var(--ff-josefin);
    text-transform: uppercase;
    font-size: var(--fs-s);
    font-weight: lighter;

    @media screen and (min-width:50em){
        font-family: var(--ff-alata);
        text-transform: capitalize;
        font-weight: lighter;

        &:hover::after{
            content: "";
            background-color: var(--clr-white);
            display: block;
            width: 100%;
            height: 2px;
            position: absolute;
            bottom: -20px;
            animation: ${GrowFromCenter} 0.2s ease-in;
        }
    }
`
