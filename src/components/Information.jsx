import React from "react";
import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'
import '../styles/components/information.sass'

const Information = () => {
    return (
        <section id="information">
            <div className="info-card">
                <AiFillPhone id="phone-icon"/>
                <div>
                    <h3>Telefone</h3>
                    <p>(11)981262073</p>
                </div>
            </div>
            <div className="info-card">
                <AiOutlineMail id="email-icon"/>
                <div>
                    <h3>E-mail</h3>
                    <p>lucashavranek@gmail.com</p>
                </div>
            </div>
            <div className="info-card">
                <AiFillEnvironment id="pin-icon"/>
                <div>
                    <h3>Localização</h3>
                    <p>São Bernardo do Campo - São Paulo</p>
                </div>
            </div>
        </section>
    )
}

export default Information