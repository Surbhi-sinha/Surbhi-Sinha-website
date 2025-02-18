import React from 'react'
import Navbar from './Navbar'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faDocker,faPython } from "@fortawesome/free-brands-svg-icons";
// import { faArrowUpRightFromSquare } from "@fortawesome/fontawesome-common-types";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {

  return (
    <div>
      <Navbar />
      <div className='custom-Font p-3'>
        <div className='row'>
          <div className='col-md-3'>
            <div className="flip-card m-3">
              <div className="flip-card-inner">
                <div className="flip-card-front background-dark text-light p-4">
                  <h3>Multilingual FAQ System</h3>
                  <hr />
                  <h4>Stack</h4>
                  <FontAwesomeIcon icon={faHtml5} size="2x" className='m-1' />
                  <FontAwesomeIcon icon={faCss3Alt} size="2x" className='m-1' />
                  <FontAwesomeIcon icon={faJs} size="2x" className='m-1' />
                  <FontAwesomeIcon icon={faReact} size="2x" className='m-1' />
                  <FontAwesomeIcon icon={faNodeJs} size="2x" className='m-1' />
                  <FontAwesomeIcon icon={faDocker} size='2x' className='m-1' />
                </div>
                <div className="flip-card-back background-light p-3">
                  <p className='text-start'>This FAQ system is designed to support multilingual environments, enabling seamless generation and management of FAQs in multiple languages. It leverages advanced technologies such as Redis for efficient caching and the Google Translate API for accurate and dynamic language translation.
                  </p>
                  <p>
                    HTML5, CSS3, JS, ReactJS, NodeJS, Docker
                  </p>
                  <div className='text-end'>
                    <a href="https://github.com/Surbhi-sinha/Multilingual_FAQ_system_UI" className='text-decoration-none text-reset'>
                      <b><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></b>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="flip-card m-3">
              <div className="flip-card-inner">
                <div className="flip-card-front background-dark text-light p-4">
                  <h3>Kam Lead Management System</h3>
                  <hr />
                  <h4>Stack</h4>
                  <FontAwesomeIcon icon={faHtml5} size="2x" className='m-1' />
                  <FontAwesomeIcon icon={faCss3Alt} size="2x" className='m-1' />
                  <FontAwesomeIcon icon={faJs} size="2x" className='m-1' />
                  <FontAwesomeIcon icon={faReact} size="2x" className='m-1' />
                  <FontAwesomeIcon icon={faNodeJs} size="2x" className='m-1' />
                  <FontAwesomeIcon icon={faDocker} size='2x' className='m-1' />
                </div>
                <div className="flip-card-back background-light p-3">
                  <p className='text-start'>The KAM Lead Management System has been designed to provide seamless lead management, user interaction, and task handling through an intuitive interface and robust backend. Below are the core features with detailed explanations and key functionalities.
                  </p>
                  <p>
                    HTML5, CSS3, JS, ReactJS, NodeJS, Docker
                  </p>
                  <div className='text-end'>
                    <a href="https://github.com/Surbhi-sinha/KAM_LEAD_MANAGEMENT_UI" className='text-decoration-none text-reset'>
                      <b><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></b>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="flip-card m-3">
              <div className="flip-card-inner">
                <div className="flip-card-front background-dark text-light p-4">
                  <h3>Tic-Tac-Toe</h3>
                  <h3>Game</h3>
                  <hr />
                  <h4>Stack</h4>
                  <FontAwesomeIcon icon={faHtml5} size="2x" className='m-1' />
                  <FontAwesomeIcon icon={faCss3Alt} size="2x" className='m-1' />
                  <FontAwesomeIcon icon={faJs} size="2x" className='m-1' />
                  <FontAwesomeIcon icon={faReact} size="2x" className='m-1' />
                  {/* <FontAwesomeIcon icon={faNodeJs} size="2x" className='m-1' />
                  <FontAwesomeIcon icon={faDocker} size='2x' className='m-1' /> */}
                </div>
                <div className="flip-card-back background-light p-3">
                  <p className='text-start'>A simple Tic-Tac-Toe game built with React.
                  </p>
                  <p>
                    HTML5, CSS3, JS, ReactJS
                  </p>
                  <div className='text-end'>
                    <a href="https://github.com/Surbhi-sinha/TicTacToe" className='text-decoration-none text-reset'>
                      <b><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></b>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="flip-card m-3">
              <div className="flip-card-inner">
                <div className="flip-card-front background-dark text-light p-4">
                  <h3>DataGrid Customisable Grid Component</h3>
                  <hr />
                  <h4>Stack</h4>
                  <FontAwesomeIcon icon={faHtml5} size="2x" className='m-1' />
                  <FontAwesomeIcon icon={faCss3Alt} size="2x" className='m-1' />
                  <FontAwesomeIcon icon={faJs} size="2x" className='m-1' />
                  {/* <FontAwesomeIcon icon={faReact} size="2x" className='m-1' /> */}
                  <FontAwesomeIcon icon={faNodeJs} size="2x" className='m-1' />
                  {/* <FontAwesomeIcon icon={faDocker} size='2x' className='m-1' /> */}
                </div>
                <div className="flip-card-back background-light p-3">
                  <p className='text-start'>Modular component based architechture.Grid Component simply renders the data into the grid. features of the Grid (editable cells, sorting, represents the data into the tabular format).Here the data is provided by the backend server although user can defined there own JSON dataset and create there desirable grid
                  </p>
                  <p>
                    HTML5, CSS3, JS, NodeJS
                  </p>
                  <div className='text-end'>
                    <a href="https://github.com/Surbhi-sinha/DataGrid" className='text-decoration-none text-reset'>
                      <b><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></b>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="flip-card m-3">
              <div className="flip-card-inner">
                <div className="flip-card-front background-dark text-light p-4">
                  <h3>Desktop Calculator</h3>
                  <hr />
                  <h4>Stack</h4>

                  <span className='langIcon'>C#</span>
                  <span className='langIcon'>.NET</span>
                  <span className='langIcon'>.NET CORE</span>
                  <hr />
                  <span className='langIcon'>Console Application, C# Library & Winforms</span>
                </div>
                <div className="flip-card-back background-light p-3">
                  <p className='text-start'>
                    The Desktop Calculator is a fully functional, user-friendly calculator built with JavaScript and React. It supports essential arithmetic operations like addition, subtraction, multiplication, and division, along with advanced features such as:

                    ✔ Responsive UI
                    ✔ Keyboard Support
                    ✔ Theme Customization
                    ✔ Error Handling
                  </p>
                  <div className='text-end'>
                    <a href="https://github.com/Surbhi-sinha/desktop_calculator" className='text-decoration-none text-reset'>
                      <b><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></b>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="flip-card m-3">
              <div className="flip-card-inner">
                <div className="flip-card-front background-dark text-light p-4">
                  <h3>LogicYeild.com</h3>
                  <h3>Data-Analytics</h3>
                  <hr />
                  <h4>Stack</h4>
                  <FontAwesomeIcon icon={faPython} size="2x" className='m-1' />
                  <hr />
                  <h4>Libraries</h4>
                  <span className='langIcon'>Plotly, Pandas, and Numpy</span>
                </div>
                <div className="flip-card-back background-light p-3">
                  <p className='text-start'>LOGICYIELD is a project based on Data Analytics in which I have developed a web application to demonstrate how the Automotive Industry could harness data to take informed decisions.Demonstrate the use of data analytics in identifying: Customer segments, specification combination (engine type, fuel, mileage, etc), choice of cars per age age group , visualisation, Statewise sales of cars for better understanding of the market etc.
                  </p>
                  <div className='text-end'>
                    <a href="https://github.com/Surbhi-sinha/LOGICYIELD.COM" className='text-decoration-none text-reset'>
                      <b><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></b>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="flip-card m-3">
              <div className="flip-card-inner">
                <div className="flip-card-front background-dark text-light p-4">
                  <h3>Project Name</h3>
                  <hr />
                  <h4>Stack</h4>
                  
                  <hr />
                  <h4>Libraries</h4>
                  <span className='langIcon'>Soon..</span>
                </div>
                <div className="flip-card-back background-light p-3">
                  <p className='text-start'>Coming soon..
                  </p>
                  <div className='text-end'>
                    <a href="https://github.com/Surbhi-sinha/LOGICYIELD.COM" className='text-decoration-none text-reset'>
                      <b><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></b>
                    </a>
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

export default Projects
