import SocialMedia from "./SocialMedia";
import Information from "./Information";
import React from "react";
import Avatar from '../img/eu.jpg'
import '../styles/components/sidebar.sass'


const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Lucas Carvalho Havranek"/>
            <p className="title">Desenvolvedor</p>
            <SocialMedia></SocialMedia>
            <Information/>
            <a href="" className="btn">Download curriculo</a>
        </aside>
    )
}

export default Sidebar