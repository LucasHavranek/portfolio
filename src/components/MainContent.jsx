import React from "react";
import '../styles/components/maincontent.sass'
import About from "./About";
import Projects from "./Projects";
import Technologies from "./Technologies";

const MainContent = () => {
    return (
        <div id="main-content">
            <About/>
            <Technologies/>
            <Projects/>
        </div>
    )
}

export default MainContent