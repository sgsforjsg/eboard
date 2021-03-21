import React from 'react'
import moment from 'moment'

const noticeSummary
  = ({ project4 }) => {
    let link = ""
    if (project4.furl) { link = <img className="materialboxed" height="80" src={project4.furl} /> }
    return (
     
        <div class="col s12 m5">
          <div class="card teal">
            <div class="row">
              <div class="col s4 m5">
                {link}
        </div>
              <div class="col s8 m5">
                <span class="white-text">{project4.title}
               <br/> {project4.dept} 
        </span>
       
              </div>
            </div>
          </div>
        </div>
      

    )

  }

export default noticeSummary

