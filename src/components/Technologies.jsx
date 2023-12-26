import React from "react";
import {DiHtml5, DiCss3, DiJavascript1, DiNodejsSmall, DiMsqlServer, DiReact} from 'react-icons/di'
import {SiNextdotjs, SiTailwindcss} from 'react-icons/si'
import '../styles/components/technologies.sass'

const technologies = [
    {id: 'js', name: 'Javascript', icon: <DiJavascript1/>},
    {id: 'python', name: 'Python', customIcon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg'},
    {id: 'html', name: 'HTML5', icon: <DiHtml5/>},
    {id: 'css', name: 'CSS3', icon: <DiCss3/>},
    {id: 'node', name: 'Node.js', icon: <DiNodejsSmall/>},
    {id: 'next', name: 'Next.js', icon: <SiNextdotjs/>},
    {id: 'react', name: 'React', icon: <DiReact/>},
    {id: 'tailwind', name: 'Tailwindcss', icon: <SiTailwindcss/>},
    {id: 'sqlserver', name: 'MsqlServer', icon: <DiMsqlServer/>},
    
]

const Technologies = () => {
    return (
        <section className="technologies">
            <h2>Tecnologias utilizadas</h2>
            <div className="technologies-grid">
                {technologies.map((tech) => (
                    <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.customIcon ? (
                            <img src={tech.customIcon} alt={tech.name} width={'45rem'} />
                        ) : (
                            tech.icon
                        )}
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Technologies