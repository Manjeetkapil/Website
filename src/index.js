import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import bounce from "react-animations";
import "bootstrap/dist/css/bootstrap.min.css";
import Radium, { StyleRoot } from "radium";

const styles = {
  bounce: {
    animation: "x 1s",
    animationName: Radium.keyframes(bounce, "bounce"),
  },
};

const skills = [
  {
    id: 1,
    thing: "C++",
  },
  {
    id: 2,
    thing: "Python3",
  },
  {
    id: 3,
    thing: "PSQL",
  },
  {
    id: 4,
    thing: "MySQL",
  },
  {
    id: 5,
    thing: "HTML",
  },
  {
    id: 6,
    thing: "Bootsrap",
  },
  {
    id: 7,
    thing: "React-js",
  },
  {
    id: 8,
    thing: "Matplotlib",
  },
];

const courses = [
  {
    id: 1,
    coursename: "Data Structure and Algorithms",
  },
  {
    id: 2,
    coursename: "Design and Analysis of Algorithm",
  },
];

const experiences = [
  {
    id: 1,
    name: "PARSEC | Annual Techfest of IIT DHARWAD",
    link: "http://parsec.iitdh.ac.in/",
    description:
      "Worked in a team of 4 fully static project in html,css,bootstap to develop official website of Parsec.",
  },
];

const projects = [
  {
    id: 1,
    name: "DishPrediction | what is my dish",
    link: "https://github.com/Manjeetkapil/DishPrediction",
    description:
      "Worked alone in Django framework where you can upload your vegetable image and you will get your dish receipe used IMMaga API and webscrapping",
  },
  {
    id: 2,
    name: "VideoRec",
    link: "https://github.com/Manjeetkapil/Videorec",
    description:
      "A project for applying grayscaling,extracting red,blue,green channel and storing them in particular directories and used c++ and opencv 4.5 version and login logout feature and storing videos with respect to user who recorded that videos.",
  },
];

function Main() {
  return (
    <section className="intro">
      <div class="container border d-flex justify-content-center h1 border-success">
        Welcome
      </div>
      <div className="container border border-success rounded my-2">
        <div className="row h3 mx-1 my-1">Manjeet Kapil</div>
        <div className="row h3 mx-1 my-1">Email:180010021@iitdh.ac.in</div>
        <div className="row h3 mx-1 my-1">
          Love solving real world problems and want to learn more DSA is fun to
          solve.
        </div>
      </div>
      <div className="container border border-success rounded my-2">
        <div className="row">
          <div className="col d-flex justify-content-center h2">EDUCATION</div>
        </div>
        <div className="row">
          <div className="col-8 h3">Indian Institute of Technology Dharwad</div>
          <div className="col h3">July 2018 - May 2022</div>
        </div>
        <div className="row">
          <div className="col h3">
            B.Tech in Computer Science and Engineering
          </div>
        </div>
        <div className="row">
          <div className="col-10 h3 d-flex justify-content-left">CGPA:</div>
          <div className="col-2 h4 d-flex justify-content-right">7.28</div>
        </div>
      </div>
      <div className="container border border-success rounded my-2">
        <div className="row d-flex justify-content-center h2">SKILLS</div>
        <div className="row">
          {skills.map((skill) => {
            return <Skill key={skill.id} skill={skill} />;
          })}
        </div>
      </div>
      <div className="container border border-success rounded my-2">
        <div className="col d-flex justify-content-center h2">COURSEWORK</div>
        {courses.map((work) => {
          return <Coursework key={work.id} work={work} />;
        })}
      </div>
      <div className="container border border-success rounded my-2">
        <div className="col d-flex justify-content-center h2">EXPERIENCE</div>
        {experiences.map((exp) => {
          return <Experience key={exp.id} exp={exp} />;
        })}
      </div>
      <div className="container border border-success rounded my-2">
        <div className="col d-flex justify-content-center h2">PROJECTS</div>
        {projects.map((pro) => {
          return <Project key={pro.key} pro={pro} />;
        })}
      </div>
    </section>
  );
}

const Skill = (props) => {
  const { thing } = props.skill;
  return <div className="col-4 h3 d-flex justify-content-center">{thing}</div>;
};
const Coursework = (props) => {
  const { coursename } = props.work;
  return <div className="row h3 mx-1">{coursename}</div>;
};
const Experience = (props) => {
  const { name, link, description } = props.exp;
  return (
    <div className="row h3">
      <a className="col-12" href={link}>
        {name}
      </a>
      <div className="col h5 my-1">{description}</div>
    </div>
  );
};
const Project = (props) => {
  const { name, link, description } = props.pro;
  return (
    <div className="row h3">
      <a className="col-12" href={link}>
        {name}
      </a>
      <div className="col h5 my-1">{description}</div>
    </div>
  );
};
ReactDom.render(<Main />, document.getElementById("root"));
