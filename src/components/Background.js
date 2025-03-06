import React from 'react'
import Navbar from './Navbar'
const Background = () => {
  return (
    <div>
      <Navbar />
      <div className='container custom-Font mt-5'>
        <div className='mt-5'>
          <div className='row justify-content-center h-100 m-3'>
            <div className='col-md-3 background-left p-5 bold-text-medium-black text-start'>Relevant Experience</div>
            <div className='col-md-8 background-right p-3'>
              <div className='row animate__animated animate__backInRight'>
                <div className='col-md-3'>01/2024-Current</div>
                <div className='col-md-7 text-start'>
                  <h4><b>SOFTWARE ENGINEER</b></h4>
                  <h5 className='text-secondary'>Grapecity India (Developer Tool Division), Noida, India</h5>
                  <div>
                    Developed and delievered tailored software components extensions, offering enhanced and efficient solutions for developers, resulting in improved user experience for their end customers.
                    Designed highly customizable and scalable enterprise-grade JavaScript solutions, focusing on client-side Excel functionality.
                    Worked on SpreadJS, a leading JavaScript-based spreadsheet solution, to optimize performance in complex web-based environments.
                    Delivered CRM system enhancements, improving customer experience and streamlining client-side processes.

                    <div>
                      <b>Key technologies used: JavaScript (ES6+), TypeScript, ReactJS, NodeJS, C#, GitLab, Visual Studio, postgreSQL, mySQL and Webpack module Bundlers.</b>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
              <div className='row animate__animated animate__backInLeft '>
                <div className='col-md-3'>04/2023-06/2023</div>
                <div className='col-md-7 text-start'>
                  <h4><b>Software Development Intern</b></h4>
                  <h5 className='text-secondary'>Microsoft India (Azure Dev Division), Hyderabad, India</h5>
                  <div>
                    Worked on the Azure DevOps DevDiv Test Plans Team, providing solutions to enhance test case import/export functionality, significantly reducing file size by up to 500 KB
                    Developed unit tests and explored multiple npm packages to optimize feature implementation
                    Collaborated with cross-geographic teams to implement micro-frontends, features, and workflows, while following Agile methodologies.
                    <div>
                      <b>
                        Gained expertise in C#, SQL Management Studio, MySQL, and telemetry tools.
                      </b>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
          <br />
          <div className='row justify-content-center h-100 m-3'>
            <div className='col-md-3 background-left p-5 bold-text-medium-black text-start'>Education, Certifications and Other Works</div>
            <div className='col-md-8 background-right p-3'>
              <div className='row animate__animated animate__backInRight animate__delay-1s'>
                <div className='col-md-3'>2020-2024</div>
                <div className='col-md-7 text-start'>
                  <h4><b>Bachelors in Technology(BTech) Computer Science Engineering, </b></h4>
                  <h5 className='text-secondary'>Guru Gobind Singh Indraprastha University, New Delhi, India</h5>
                  <div>
                    <b>CGPA Scored </b>: 9.2/10
                    <div>
                      <b>Coursework</b>: Data structure and algorithm, OOPs, DBMS, Operating system, Computer Networks
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
              <div className='row animate__animated animate__backInLeft animate__delay-1s'>
                <div className='col-md-3'>2017-2019</div>
                <div className='col-md-7 text-start'>
                  <h4><b>Intermediate (PCM) Engineering, </b></h4>
                  <h5 className='text-secondary'>Central Board of Secondary Education, New Delhi, India</h5>
                  <div>
                    <b>Percentage Scored </b>: 92%
                    <div>
                      <b>Coursework</b>: Physics, Chemistry, and Mathematics and Computer Science
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Background
