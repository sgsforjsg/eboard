import React, { Component } from 'react'

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Notice from '../projects/noticeSummary'
import NoticeDats from '../projects/viewNoticeDatas'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: this.props.projects,
      showing: true,
      days: '',
      value: ''
    }
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };

  render() {

    const { projects, err, auth, value } = this.props;
    // console.log(this.state)
    console.log(this.props.firestore)
    console.log('auth')


    //if (!projects) return <Redirect to='/edit' />  

    if (projects) {
      let Reslt = this.props.projects.filter(
        (projet) => { return projet.dept.indexOf(this.state.value) !== -1 || projet.title.indexOf(this.state.value) !== -1 }
      )


      return (
        <div className="dashboard container">
          {/*this.state.showing
            ? <div>This is visible  <input><i className = "material-icons ">cloud</i></inpit>  </div>
            : null
          */ }
                          
            <div className="col s12 m2">
            < NoticeDats project4={Reslt} />
              {Reslt.map(project3 => {
                if (auth.uid) {
                  return (<Link to={'/edit/' + project3.id} key={project3.id}>
                    < Notice project4={project3} />
                  </Link>)
                }
                else {
                  return (
                    < Notice project4={project3} key={project3.id} />
                          ) }
                      }
              )}
            </div>
          </div>
       
      )
    }
    else {
      return (<div><h4>updating data from cloude....</h4></div>)
    }
  }
}

const mapStateToProps = (state) => {
  
  console.log(state)
  return {
    projects: state.firestore.ordered.notice,
    auth: state.firebase.auth
  }
}
export default compose(

  connect(mapStateToProps),
  firestoreConnect((props) => [
    // { collection: 'visitingDr', where: [ ['visitday', '==','Sat']  ]   }
   // { collection: 'visitingDr', where: [['visitday', 'array-contains', props.dayname]] }
  // { collection: 'notice', where: [ ['displayon', '==',true]  ]   }
  { collection: 'notice'  }
  ])
)(Dashboard)
