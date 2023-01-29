import styled from "styled-components";

export const Name = styled.div`
    margin: 0em 0em 0.5em 0em;

    font-size: 3em;
    font-weight: bolder;

    color: #e9e9e9;

    .lastName {
        color: #e62118;
    }
`

export const Role = styled.h2`
    margin: 0em 0em 1em 0em;

    font-size: 1.5em;
    font-weight: normal;

    color: #cdcdcd;
`

export const Button = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    text-align: center;

    font-size: 1em;
    font-weight: bold;

    margin: 0em 1em;
    padding: 0.5em 2em;

    color: #e62118;

    border: 0.1em solid #e62118;
    border-radius: 0.5em;
    
    transition-duration: 0.3s;
    
    :hover {
        color: #0d0d0d;
        background-color: #e62118;

        transition-duration: 0.3s;
    }
`

export const ButtonsGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin: 0.5em;
`

export const Home = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-bottom: 5em;

    height: 100vh;
    width: 100vw;
`