import styled, {keyframes} from "styled-components"

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

export const Container = styled.div`
    background-color: var(--clr-black);
    margin-top: 5em;
    
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
        margin: 0 auto;
        padding: 3em 0;
        gap: 2em;
    
        @media screen and (min-width:50em){
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }

    }
`
export const Picture = styled.picture`
    

`

export const Links = styled.ul`
    line-height: 2.5;
    grid-column: 1;
    grid-row: 2;

    @media screen and (min-width:50em){
        display: flex;
        gap: 1em;
        
    }
`
export const LinksLi = styled.li`
    color: var(--clr-white);
    text-transform: capitalize;
    position: relative;

    @media screen and (min-width: 50em) {
        &:hover::after {
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            position: absolute;
            border: -10px;
            background-color: var(--clr-white);
            animation: ${GrowFromCenter} 200ms ease-in;
        }
    }
`

export const Social = styled.ul`
    display: flex;
    justify-content: flex-end;
    gap: 1em;
    

`

export const SocialLi = styled.li`
    position: relative;
    cursor: pointer;

@media screen and (min-width: 50em) {
    &:hover::after {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        position: absolute;
        border: -20px;
        background-color: var(--clr-white);
        animation: ${GrowFromCenter} 200ms ease-in;
    }
}

`

export const Copyright = styled.p`
    color: var(--clr-dark-grey);
    margin-bottom: 3em;

    @media screen and (min-width:50em){
        margin-bottom: 0;
        
        text-align: end;
    }
`