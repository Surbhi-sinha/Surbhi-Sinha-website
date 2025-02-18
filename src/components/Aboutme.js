import React from 'react'
import Navbar from './Navbar';
import aboutMeGif from '../assets/aboutMe.gif';
import Code_review from '../assets/Code_review.gif';
import { Link } from 'react-router-dom';

const Aboutme = () => {
   return (
      <div>
         <div className='aboutmePage'>

            <Navbar />

            <div className="">
               <div>
                  <div className="row vh-100 mt-3 aboveElement">

                     <div className="col-md-5 d-flex flex-column justify-content-center align-items-center text-center">
                        <div className='typewriter'>Surbhi Sinha</div>
                        <div className='bold-text-normal-grey animate__animated animate__backInUp animate__delay-0.5s'>&lt; FullStack Developer / &gt;</div>
                        <button className='buttonAbout animate__animated animate__backInUp animate__delay-0.5s'>
                           <Link className='button-connect' to='/connect'>Reach out</Link>
                        </button>
                     </div>
                     <div className="col-md-6 p-5 animate__animated animate__backInRight">
                        <img src={aboutMeGif} alt='aboutMegif' style={{ width: "100%", height: '100%' }} />
                     </div>
                  </div>
               </div>
            </div>
            <div className="tag-list m-3">
                           <div className="loop-slider" style={{ "--duration": "15951ms", "--direction": "normal" }}>
                              <div className="inner">
                                 <div className="tag"><span>#</span> JavaScript</div>
                                 <div className="tag"><span>#</span> webdev</div>
                                 <div className="tag"><span>#</span> Typescript</div>
                                 <div className="tag"><span>#</span> Next.js</div>
                                 <div className="tag"><span>#</span> UI/UX</div>
                                 {/* <!-- duplicated content --> */}
                                 <div className="tag"><span>#</span> JavaScript</div>
                                 <div className="tag"><span>#</span> webdev</div>
                                 <div className="tag"><span>#</span> Typescript</div>
                                 <div className="tag"><span>#</span> Next.js</div>
                                 <div className="tag"><span>#</span> UI/UX</div>
                                 <div className="tag"><span>#</span> JavaScript</div>
                                 <div className="tag"><span>#</span> webdev</div>
                                 <div className="tag"><span>#</span> Typescript</div>
                                 <div className="tag"><span>#</span> Next.js</div>
                                 <div className="tag"><span>#</span> UI/UX</div>
                                 <div className="tag"><span>#</span> JavaScript</div>
                                 <div className="tag"><span>#</span> webdev</div>
                                 <div className="tag"><span>#</span> Typescript</div>
                                 <div className="tag"><span>#</span> Next.js</div>
                                 <div className="tag"><span>#</span> UI/UX</div>
                              </div>
                           </div>
                           <div className="loop-slider" style={{ "--duration": "19260ms", "--direction": "reverse" }}>
                              <div className="inner">
                                 <div className="tag"><span>#</span> webdev</div>
                                 <div className="tag"><span>#</span> Gatsby</div>
                                 <div className="tag"><span>#</span> JavaScript</div>
                                 <div className="tag"><span>#</span> Tailwind</div>
                                 <div className="tag"><span>#</span> Typescript</div>
                                 {/* <!-- duplicated content --> */}
                                 <div className="tag"><span>#</span> webdev</div>
                                 <div className="tag"><span>#</span> Gatsby</div>
                                 <div className="tag"><span>#</span> JavaScript</div>
                                 <div className="tag"><span>#</span> Tailwind</div>
                                 <div className="tag"><span>#</span> Typescript</div>
                                 <div className="tag"><span>#</span> webdev</div>
                                 <div className="tag"><span>#</span> Gatsby</div>
                                 <div className="tag"><span>#</span> JavaScript</div>
                                 <div className="tag"><span>#</span> Tailwind</div>
                                 <div className="tag"><span>#</span> Typescript</div>
                                 <div className="tag"><span>#</span> webdev</div>
                                 <div className="tag"><span>#</span> Gatsby</div>
                                 <div className="tag"><span>#</span> JavaScript</div>
                                 <div className="tag"><span>#</span> Tailwind</div>
                                 <div className="tag"><span>#</span> Typescript</div>
                                 <div className="tag"><span>#</span> webdev</div>
                                 <div className="tag"><span>#</span> Gatsby</div>
                                 <div className="tag"><span>#</span> JavaScript</div>
                                 <div className="tag"><span>#</span> Tailwind</div>
                                 <div className="tag"><span>#</span> Typescript</div>
                              </div>
                           </div>
                           
                           <div id="fade" ></div>
                        </div>
            <div className='bg-light'>
               <div className='row vh-100 mt-3 '>
                  <div className='col-md-6 p-5 animate__animated animate__backInUp animate__delay-1s'>
                     <img src={Code_review} alt='code-reviewgif' style={{ width: "100%", height: '100%' }} />
                  </div>
                  <div className='col-md-6 p-5 text-start mb-5'>

                     <h3>About Me</h3>

                     <div>
                        I am  Surbhi Sinha , a highly skilled  Full-Stack Developer  with a strong focus on building scalable and efficient web applications. With expertise in  <b>Node.js</b>, <b>React.js</b>, and <b>MySQL</b> , I specialize in developing <b>robust backend architectures</b> and <b>dynamic frontend interfaces</b>.
                     </div>
                     <br />
                     <div>
                        Currently, I am working on multiple projects, including a  Lead Management System  and an  EasyQuery platform , leveraging the  <b>MERN stack</b>  to create intuitive, high-performance applications. My passion lies in  backend development , ensuring seamless data flow, optimized performance, and secure user experiences.
                     </div>
                     <br />
                     <div>
                        Beyond development, I am deeply interested in  building innovative products  with AI-driven features, automation, and advanced analytics. My approach to software development is both strategic and detail-oriented, ensuring that every project I work on is  <b>highly functional</b>, <b>scalable</b>, and <b>user-centric</b> .
                     </div>
                     <br />
                     <div>
                        I continuously explore new technologies and best practices, always striving to  enhance efficiency and deliver exceptional results .
                     </div>
                     <br />
                     <div>
                        <h4>Technical Skills:</h4>
                        <ul className='list-unstyled' >

                           <li>✔  <b>Backend</b>:  Node.js, Express.js, MySQL</li>
                           <li>✔  <b>Frontend</b>:  React.js, Bootstrap, HTML5, CSS3, Tailwind CSS</li>
                           <li>✔  <b>System Design</b>:  Database modeling, API development, role-based access control</li>
                           <li>✔  <b>Other Expertise</b>:  Caching, multilingual support, security best practices</li>
                           <li>✔   <b>Tools</b>:
                              Postman, Git, Gitlab, CI/CD(Github/Gitlab), SQL Management Studio, Visual Studio Code, SQL Server Workbench CE, Redis and Docker</li>

                        </ul>
                     </div>
                  </div>

               </div>
            </div>
         </div>
         <div className="hero_area">
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
               <defs>
                  <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
               </defs>
               <g className="parallax">
                  <use href="#gentle-wave" x="48" y="0" fill="rgba(106, 2, 28, 0.5)" />
                  <use href="#gentle-wave" x="48" y="3" fill="rgba(213, 189, 175, 0.5)" />
                  <use href="#gentle-wave" x="48" y="5" fill="rgba(154, 91, 91, 0.3)" />
                  <use href="#gentle-wave" x="48" y="7" fill="rgba(227, 213, 202, 0.5)" />
               </g>
            </svg>
         </div>

      </div>
   )
}

export default Aboutme
