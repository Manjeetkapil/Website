import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

const skills = [
    {
        id:1,
        thing:"C++"
    },
    {
        id:2,
        thing:"Python3"
    }
]

const courses = [
    {
        id:1,
        coursename:"Data Structure and Algorithms"
    },
    {
        id:2,
        coursename:"Design and Analysis of Algorithm"
    }
]

const experiences = [
    {
        id:1,
        name:"PARSEC | Annual Techfest of IIT DHARWAD",
        link:"http://parsec.iitdh.ac.in/",
        description:"Worked in a team of 4 fully static project in html,css,bootstap to develop official website of Parsec."
    }
]

const projects = [
    {
        id:1,
        name:"DishPrediction | what is my dish",
        link:"https://github.com/Manjeetkapil/DishPrediction",
        description:"Worked alone in Django framework where you can upload your vegetable image and you will get your dish receipe used IMMaga API and webscrapping"
    },
    {
        id:2,
        name:"VideoRec",
        link:"https://github.com/Manjeetkapil/Videorec",
        description:"A project for applying grayscaling,extracting red,blue,green channel and storing them in particular directories and used c++ and opencv 4.5 version and login logout feature and storing videos with respect to user who recorded that videos."
    }
]

function Main(){
  return(
   <section className="intro">
       <h1 className="name">
           MANJEET KAPIL
       </h1>
       <h1 className="details">
            IIT Dharwad
            <br/>
            Email:180010021@iitdh.ac.in
       </h1>
       <h2 className = "passion">
           <br/>
           Love solving real world problems and want to learn more DSA is fun to solve.
       </h2>
       <div className="Education">
           <br/>
            EDUCATION
            <div className="college">
                INDIAN INSTITUTE OF TECHNOLOGY,DHARWAD
                &emsp; &emsp; &emsp; (july 2018 - May 2022 [Expected])
                <h6>
                    <br/>
                    B.TECH IN COMPUTER SCIENCE AND ENGINEERING
                    <br/>
                    CGPA: 7.28
                </h6>
            </div>
       </div>
       <div>
           <br/>
           SKILLS
           {skills.map((skill)=>{
               return(
                   <Skill key = {skill.id} skill = {skill}/>
               )
           })}
       </div>
        <div>
           <br/>
           COURSEWORK
           {courses.map((work)=>{
               return(
                   <Coursework key = {work.id} work = {work}/>
               )
           })}
       </div>
       <div>
           <br/>
           EXPERIENCE
           {experiences.map((exp)=>{
               return(
                   <Experience key = {exp.id} exp = {exp}/>
               )
           })}
       </div>
       <div>
           <br/>
           PROJECTS
           {projects.map((pro)=>{
               const{name,link,description} = pro
               return(
                   <Project key={pro.key} pro={pro}/>
               )
           })}
       </div>
   </section>
  );
}

const Skill = (props) =>{
    const {thing} = props.skill
    return <div className="skill">
        <h1>
            {thing}
        </h1>
    </div>
}
const Coursework = (props) =>{
    const{coursename} = props.work
    return <div className="work">
        <h1>
            {coursename}
        </h1>
    </div>
}
const Experience = (props) =>{
    const{name,link,description} = props.exp
    return <div className = "experience">
        <h3><a href={link}>{name}</a></h3>
        <h4>{description}</h4>
    </div>
}
const Project = (props) =>{
    const{name,link,description} = props.pro
    return <div className = "project">
        <h3><a href={link}>{name}</a></h3>
        <h4>{description}</h4>
    </div>
}
ReactDom.render(<Main/>,document.getElementById('root'))
