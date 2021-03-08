import React from 'react'
import moment from 'moment'

const noticeSummary
 = ({ project4 }) => {
  
  return (
    <div className="row">
      <div className="card z-depth-0">
        <div className="card-panel white darken-2">
          <div><span className="black-text"><b>{project4.dept}</b></span></div>
          <div><span className="black-text">{project4.title}</span></div>
          <div><span className="white-text">{project4.Body1}</span></div>
          <div><span className="white-text">{project4.Body2}</span></div>
          <div><span className="white-text">{project4.Body3}</span></div>
        </div>
      </div>
    </div>
  )

}

export default noticeSummary

