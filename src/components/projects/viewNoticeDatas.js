import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Notice from '../projects/noticeSummary'
import { Redirect } from 'react-router-dom'
const viewNoticeDatas
  = ({ datas }) => {
    if (!datas) return <Redirect to='/' />
    console.log('data', datas)
    return (

      <div className="container">
        

          <Link to={'/create/a'}>
            <button ><i class="material-icons">note_add</i> Add New</button>
          </Link>

          {datas.map(project3 => {
            return (<Link to={'/create/' + project3.id} key={project3.id}>
              < Notice project4={project3} />
            </Link>)
          }

          )}




        
      </div>
    )

  }
const mapStateToProps = (state) => {
  console.log(state)
  return {
    datas: state.firestore.ordered.notice
  }
}
export default connect(mapStateToProps)(viewNoticeDatas)


