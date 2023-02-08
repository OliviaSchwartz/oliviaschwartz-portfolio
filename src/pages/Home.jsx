import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import {  DiCss3Full, DiHtml5, DiMongodb, DiNodejsSmall, DiReact  } from "react-icons/di";
import { SiExpress, SiJavascript, SiFlask, SiPostgresql, SiSequelize, SiTypescript } from 'react-icons/si'
import { FaVuejs, FaPython } from 'react-icons/fa'
import SkillCard from '../components/SkillCard';


function Home () {
    return(
        <div>
            <header id="header">
            <div className="homepage-title">
                <h1 id="homepage-title">OLIVIA SCHWARTZ</h1>
                <h2 id="homepage-subtitle">SOFTWARE ENGINEER.</h2>
            </div>
            <div className="header-carousel-container">
               <h3 className="intro">WEB DEVELOPER | COFFEE LOVER | TRAVEL ENTHUSIAST | D.C. AREA</h3>
            </div>
            <hr className="page-break"></hr>
            <div className="explore-container">
                <Link to='/portfolio'><button className="explore-button"><h3>EXPLORE WORK >>> </h3></button></Link>
            </div>
            </header>
            <div className="skills">
                <h1 className="skillsHeader">Skills</h1>
            <div className='skills-icon-container'>
                <SkillCard icon={<DiHtml5 className='icon'/>} name="HTML" />
                <SkillCard icon={<DiCss3Full className='icon'/>} name="CSS" />
                <SkillCard icon={<SiJavascript className='icon'/>} name="JavaScript" />
                <SkillCard icon={<DiReact className='icon'/>} name="React.js" />
                <SkillCard icon={<FaVuejs className='icon'/>} name="Vue.js" />
                <SkillCard icon={<SiExpress className='icon'/>} name="Express.js" />
                <SkillCard icon={<DiNodejsSmall className='icon'/>} name="Node.js" />
                <SkillCard icon={<FaPython className='icon'/>} name="Python" />
                <SkillCard icon={<SiFlask className='icon'/>} name="Flask" />
                <SkillCard icon={<DiMongodb className='icon'/>} name="MongoDB" />
                <SkillCard icon={<SiPostgresql className='icon'/>} name="PostgreSQL" />
                <SkillCard icon={<SiSequelize className='icon'/>} name="Sequelize" />
                <SkillCard icon={<SiTypescript className='icon'/>} name="TypeScript" />
            </div>
            </div>

        </div>
    )
}

export default Home
