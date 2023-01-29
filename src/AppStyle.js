import { createGlobalStyle } from "styled-components";
import "@fontsource/ubuntu"

const AppGlobalStyle = createGlobalStyle`
    padding: 10em;

    body {
        background-color: #0d0d0d;
        font-family: "Ubuntu", sans-serif;
        
        margin: 0;
        border: 0;
        padding: 0;

    }

    #root {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        
        height: 100vh;
        width: 100vw;
    }

    #tsparticles {
        position: absolute;
        z-index: -1000;
    }    
`

export default AppGlobalStyle