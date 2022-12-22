import { Component } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaMedium, FaYoutube, FaTwitch } from "react-icons/fa";
import { MdOutlineLocationOn, MdOutlineMapsHomeWork, MdOutlineMail } from "react-icons/md";
import { ProfileCard, ProfileImage, ProfileInformations, Information, ProfileSocialMedia, ProfileTitles, SocialMediaIcon } from "./styles/ProfileCardStyle";

export class ProfileCardComponent extends Component {
    render() {
        return (
            <ProfileCard>
                
                <ProfileImage>
                    <img src="https://avatars.githubusercontent.com/u/40248598?v=4" alt="Rary's Photograpy" />
                </ProfileImage>

                <ProfileTitles>
                    <h1>Rary Coringa</h1>
                    <h2>SOFTWARE DEVELOPER</h2>
                </ProfileTitles>

                <ProfileInformations>
                    <Information>
                        <MdOutlineLocationOn />
                        <p>Natal, Brazil</p>
                    </Information>
                    <Information>
                        <MdOutlineMapsHomeWork />
                        <p>DevGrid Ltd</p>
                    </Information>
                    <Information>
                        <MdOutlineMail />
                        <p>contact@rarycoringa.dev</p>
                    </Information>
                </ProfileInformations>

                <ProfileSocialMedia>
                    <SocialMediaIcon href="https://linkedin.com/in/rarycoringa" target="_blank">
                        <FaLinkedin />
                    </SocialMediaIcon>
                    <SocialMediaIcon href="https://github.com/rarycoringa" target="_blank">
                        <FaGithub />
                    </SocialMediaIcon>
                    <SocialMediaIcon href="https://twitter.com/rarycoringa" target="_blank">
                        <FaTwitter />
                    </SocialMediaIcon>
                    <SocialMediaIcon href="https://instagram.com/rarycoringa" target="_blank">
                        <FaInstagram />
                    </SocialMediaIcon>
                    <SocialMediaIcon href="https://www.youtube.com/@rarycoringa" target="_blank">
                        <FaYoutube />
                    </SocialMediaIcon>
                </ProfileSocialMedia>
            </ProfileCard>
        )
    }
}