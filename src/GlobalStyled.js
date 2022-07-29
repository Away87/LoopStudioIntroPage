import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    /* CSS Reset */

    html, body, div, span, applet, object, iframe,
    blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    /* CSS reset ends */

    /* Global Css */

    :root {
        --clr-white: hsl(0, 0%, 100%);
        --clr-black: hsl(0, 0%, 0%);
        --clr-dark-grey: hsl(0, 0%, 55%);
        --clr-very-dark-grey: hsl(0, 0%, 41%);

        /* --fs-xs: clamp(0.7rem, 1vw + 0.05rem, 2rem);
        --fs-s: clamp(1rem, 1vw + 0.05rem, 2.5rem);
        --fs-m: clamp(3rem, 1vw + 0.05rem, 4rem);
        --fs-l: clamp(4rem, 1vw + 0.05rem, 8rem); */

        --fs-l: clamp(3.5rem, 1vw + 0.05rem, 8rem);
        --fs-m: clamp(1.7rem, 5vw + 0.05rem, 4rem);
        --fs-sm: clamp(1rem, 3vw + 0.05rem, 3rem);
        --fs-s: clamp(1rem, 1vw + 0.05rem, 6rem);
        --fs-xs: clamp(0.9rem, 1vw + 0.05rem, 0.9rem);

        --z-index-0:0;
        --z-index-50:50;
        --z-index-100:100;
        --z-index:1000:1000;

        --ff-alata: 'Alata', sans-serif;
        --ff-josefin: 'Josefin Sans', sans-serif;
    }

    body {
        color: var(--clr-black);
    }

    *,
    *::before,
    *::after {
        font-family: var(--ff-alata);
        margin: 0;
        padding:0;
        box-sizing: border-box;
        
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    a{
        color: inherit;
        text-decoration: none;
    }

    main {
        width: 80%;
        margin: 0 auto;
        margin-bottom: 50em;
        display: grid;
        gap: 5em;
    }

    /* Global Css ends */
`