import { Component } from "react";
import { Button, ButtonsGroup, Home, Name, Role } from "./HomeStyle";

export class HomeSection extends Component {
    render() {
        return (
            <Home>
                <Name>
                    RARY&nbsp;<span className="lastName">CORINGA</span>
                </Name>
                <Role>
                    Software Engineer
                </Role>
                <ButtonsGroup>
                    <Button href="#about">About me</Button>
                    <Button href="#contact">Get in Touch</Button>
                </ButtonsGroup>
            </Home>
        )
    }
}