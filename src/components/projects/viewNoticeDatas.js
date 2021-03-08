import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Notice from '../projects/noticeSummary'
import { Redirect } from 'react-router-dom'
const viewNoticeDatas
 = ({ datas }) => {
if(!datas) return <Redirect to='/' /> 
    console.log('data',datas)
  return (
    <div className="row">
      <div className="card z-depth-0">
        <div className="card-panel white darken-2">
          <p>Sanjay</p>
          {datas.map(project3 => {
                
                  return (<Link to={'/create/' + project3.id} key={project3.id}>
                    < Notice project4={project3} />
                  </Link>)
                }
                
              )}


          
        </div>
      </div>
    </div>
  )

}
const mapStateToProps = (state) => {
console.log(state)
    return {
        datas:state.firestore.ordered.notice
    }
  }
  export default connect(mapStateToProps)(viewNoticeDatas)


