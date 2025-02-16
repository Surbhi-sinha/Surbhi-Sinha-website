import React from 'react';
import Navbar from './Navbar';

const Skills = () => {

  const skills_left = [
    { name: "HTML5", value: 100 },
    { name: "CSS3", value: 100 },
    { name: "JavaScript", value: 95 },
    { name: "React.js", value: 90 },
    { name: "Node.js", value: 90 },

  ]
  const skills_right=[
    { name: "RestAPI", value: 85 },
    { name: "ExpressJS", value: 80 },
    { name: "MongoDB", value: 80 },
    { name: "MySQL", value: 90 },
    { name: "Java", value: 75 },
  ];
  const tools =[
    { name: "Postman", value: 85 },
    { name: "Github CI/CD", value: 80 },
    { name: "SQL Workbench CE", value: 80 },
    { name: "Redis", value: 75 },
    { name: "Visual Studio Code", value: 100 },
    { name: "Docker", value: 75 },
    { name: "Visual Studio", value: 80 },
  ];
  return (
    <div>
      <Navbar />
      <div>
        <div className='row justify-content-center mt-3 custom-Font'>
          <div className='col-md-4 background-dark text-light p-5'>
            <h3>Tech Skills</h3>
            <div>
              Tech Stack Proficiency
            </div>
            <hr />
            <h3 className='mt-3'> &lt;MERN STACK/&gt;</h3>
          </div>
          <div className='col-md-4 background-light'>
            {skills_left.map((skills_left, index) => (
              <div key={index} className="p-3 m-3">
                <div className="row">
                  <div className="col-md-6">
                    <div className="text-start">{skills_left.name}</div>
                  </div>
                  <div className="col-md-6">
                    <div className="text-end">{skills_left.value}%</div>
                  </div>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-valuenow={skills_left.value}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar"
                    style={{ width: `${skills_left.value}%`, backgroundColor: "#69021c" }}
                  >
                    {skills_left.value}%
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='col-md-4 background-right'>
          {skills_right.map((skills, index) => (
              <div key={index} className="p-3 m-3">
                <div className="row">
                  <div className="col-md-6">
                    <div className="text-start">{skills.name}</div>
                  </div>
                  <div className="col-md-6">
                    <div className="text-end">{skills.value}%</div>
                  </div>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-valuenow={skills.value}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar"
                    style={{ width: `${skills.value}%`, backgroundColor: "#69021c" }}
                  >
                    {skills.value}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='row justify-content-center mt-3 custom-Font'>
          <div className='col-md-4 background-left p-5'>
            <h3>Tools Proficiency</h3>
            <hr />
            <h3 className='mt-3'> &lt;FULL STACK/&gt;</h3>
          </div>
          <div className='col-md-8 background-light'>
            {tools.map((skills, index) => (
              <div key={index} className="p-3 m-3">
                <div className="row">
                  <div className="col-md-6">
                    <div className="text-start">{skills.name}</div>
                  </div>
                  <div className="col-md-6">
                    <div className="text-end">{skills.value}%</div>
                  </div>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-valuenow={skills.value}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar"
                    style={{ width: `${skills.value}%`, backgroundColor: "#69021c" }}
                  >
                    {skills.value}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
