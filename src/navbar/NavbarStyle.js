import styled from "styled-components";
import "@fontsource/ubuntu";

export const Logo = styled.img`
    height: 3em;
    width: auto;

    margin: 0em 0em 0em 20vw;
`

export const Section = styled.li`
    font-size: 1em;
    font-weight: normal;

    a, a:visited {
        display: block;
       
        padding: 1em 1.5em;
        text-decoration: none;
        color: #e9e9e9;

        transition-duration: 0.3s;
    }

    a:hover, a:active {
        text-decoration: none;

        color: #e62118;
        
        transition-duration: 0.3s;
    }
`

export const SectionsList = styled.ul`
    display: flex;
    flex-direction: row;

    margin: 0em 20vw 0em 0em;
    padding: 0;

    list-style-type: none;
`

export const Navbar = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;

    height: 5em;
    width: 100vw;
`