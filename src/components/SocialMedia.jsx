import React from "react";
import '../styles/components/socialmedia.sass'
import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

const socialMedia = [
    {name: 'linkedin', icon: <FaLinkedinIn/>},
    {name: 'github', icon: <FaGithub/>},
    {name: 'instagram', icon: <FaInstagram/>},

]


const SocialMedia = () => {
    return (
        <section id="social-media">
            {socialMedia.map((social) => (
                <a href="#" className="social-btn" id={social.name} key={social.name}>
                    {social.icon}
                </a>
            ))}
        </section>
    )
}

export default SocialMedia