import React from "react";
import '../styles/components/socialmedia.sass'
import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

const socialMedia = [
    {name: 'linkedin', url: 'https://www.linkedin.com/in/lucas-havranek/', icon: <FaLinkedinIn/>},
    {name: 'github', url: 'https://github.com/LucasHavranek', icon: <FaGithub/>},
    {name: 'instagram', url: 'https://www.instagram.com/lucashavranek/', icon: <FaInstagram/>},

]


const SocialMedia = () => {
    return (
        <section id="social-media">
            {socialMedia.map((social) => (
                <a href={social.url} className="social-btn" id={social.name} key={social.name} target="_blank">
                    {social.icon}
                </a>
            ))}
        </section>
    )
}

export default SocialMedia