import { Component } from "react";
import { Logo, Navbar, Section, SectionsList } from "./NavbarStyle"

export class NavbarSection extends Component {
    render() {
        return (
            <Navbar>
                <Logo src="logo-r-red.png" alt="Rary's Logo"/>
                <SectionsList>
                    <Section><a href="#">Home</a></Section>
                    <Section><a href="#about">About</a></Section>
                    <Section><a href="#skills">Skills</a></Section>
                    <Section><a href="#projects">Projects</a></Section>
                    <Section><a href="#contact">Contact</a></Section>
                </SectionsList>
            </Navbar>
        )
    }
}