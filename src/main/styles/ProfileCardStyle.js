import styled from 'styled-components';
import "@fontsource/ubuntu"


export const ProfileImage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    
    width: 10em;
    height: 10em;
    
    border-radius: 50%;
    border: 0.3em solid #424242;

    transition-duration: 0.5s;

    img {
        padding: 0em 2.5em;

        width: 9.5em;
        height: 9.5em;

        border-radius: 50%;
    }
`

export const ProfileTitles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    padding: 0em 2.5em;

    font-family: "Ubuntu", sans-serif;

    color: #e9e9e9;

    h1 {
        margin: 0em 0em 0.15em 0em;
        font-size: 2em;

        font-weight: lighter;

        
    }

    h2 {
        margin: 0.15em 0em 0em 0em;
        font-size: 1.05em;

        font-weight: bolder;

        opacity: 50%;
}
`

export const ProfileInformations = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    align-content: center;

    padding: 0em 2.5em;
`

export const Information = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
    align-content: center;
    /* background-color: black; */

    margin: 0.25em 0em;

    svg {
        margin: 0em 0.2em 0em 0em;
        
        width: 1.2em;
        height: 1.2em;

        fill: #e9e9e9;
    }

    p {
        margin: 0em 0em 0em 0.2em;

        color: #e9e9e9;

        font-family: "Ubuntu", sans-serif;
        font-weight: lighter;
        font-size: 1em;
    }
`

export const ProfileSocialMedia = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: space-around;

    padding: 0em 2.5em;
`

export const SocialMediaIcon = styled.a`
    svg {
        margin: 0.5em;
        
        width: 2em;
        height: 2em;

        fill: #e9e9e9;

        transition-duration: 0.15s;
    }

    :hover {
        svg {
            fill: #e62118;
        }

        transition-duration: 0.15s;
    }
`

export const ProfileCard = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    margin: 2em 2em;

    width: 20em;
    height: 35em;

    background-image: linear-gradient(to bottom right, #303030, #1d1d1d);
    border-radius: 2em;
    border-bottom: 0em solid #e62118;

    transition-duration: 0.15s;

    :hover {
        border-bottom: 0.75em solid #e62118;

        margin: 1.25em 2em;

        transition-duration: 0.15s;

        ${ProfileImage} {
            border: 0.3em solid #e62118;

            transition-duration: 0.5s;
        }
    }

`