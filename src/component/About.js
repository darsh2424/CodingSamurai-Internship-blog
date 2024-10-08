import React from 'react'
import pfp from '../img/pfp.jpeg'
import semcom_img from '../img/semcom.jpeg'
import skt_img from '../img/SKT.jpeg'
import coding_img from '../img/coding_samurai.jpeg'

const About = ({ isDarkMode }) => {
  return (
    <>
      <section className="py-3 py-md-5">
        <div className="container">
          <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-6 col-xl-5">
              <img className="img-fluid rounded-circle" width={'350px'} loading="lazy" src={pfp} alt="About 1" />
            </div>
            <div className="col-12 col-lg-6 col-xl-7">
              <div className="row justify-content-xl-center">
                <div className="col-12 col-xl-11">
                  <h2 className="mb-3">Darsh Parikh</h2>
                  <p className="lead fs-4 text-secondary mb-3">BCA | Intern @Coding Samurai | Web Developer Enthusiast</p>
                  <p className="mb-5">BCA student '21-24 | Skilled in both front-end and back-end development |
                    Built PHP & ASP.NET projects with SQL/MySQL backends, from client to server-client apps | Completed certified online courses during college | Excited to explore new technologies eagerly :&#41;</p>
                  <h4>Experiences</h4>
                  <div className="row">
                    <div className="col-md-4">
                      <div className={`card ${isDarkMode?'bg-dark text-white':'bg-light text-black'}`}>
                        <img src={semcom_img} className="card-img-top" alt="semcom" />
                        <div className="card-body">
                          <h6 className="card-title">Internship <br /> May 2024 - Jul 2024</h6>
                          <p className="card-text">
                            Vallabh Vidyanagar, Gujarat, India · On-site
                            <br />Project:<br /> 
                            <a href='https://github.com/utkarshrajputt/semcom_portal/tree/darsh-sc'>NEEV - College Student Profiling Portal</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className={`card ${isDarkMode?'bg-dark text-white':'bg-light text-black'}`}>
                        <img src={skt_img} className="card-img-top" alt="Skiillcraft Technology" />
                        <div className="card-body">
                          <h6 className="card-title">Internship <br /> Jul 2024 - Aug 2024</h6>
                          <p className="card-text">
                            Remote
                            <br /><br />Tasks:<br /> <a className='px-2' href='https://github.com/darsh2424/SCT_WD_1' target='_blank' rel="noreferrer">Task 1</a> 
                             | <a className='px-2' href='https://github.com/darsh2424/SCT_WD_2' target='_blank' rel="noreferrer">Task 2</a> <br /> 
                            <a className='px-2' href='https://github.com/darsh2424/SCT_WD_3' target='_blank' rel="noreferrer">Task 3</a> 
                             | <a className='px-2' href='https://github.com/darsh2424/SCT_WD_4' target='_blank' rel="noreferrer">Task 4</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className={`card ${isDarkMode?'bg-dark text-white':'bg-light text-black'}`}>
                        <img src={coding_img} className="card-img-top" alt="Coding Samurai" />
                        <div className="card-body">
                          <h6 className="card-title">Internship <br /> Jul 2024 - Aug 2024</h6>
                          <p className="card-text">
                            Remote
                            <br /><br />Tasks:<br /> <a className='px-2' href='https://github.com/darsh2424/CodingSamurai-Internship-calc' target='_blank' rel="noreferrer">Task 1</a> 
                             | <a className='px-2' href='https://github.com/darsh2424/CodingSamurai-Internship-todo' target='_blank' rel="noreferrer">Task 2</a> <br /> 
                            <a className='px-2' href='https://github.com/darsh2424/CodingSamurai-Internship-blog' target='_blank' rel="noreferrer">Task 3</a> 
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
