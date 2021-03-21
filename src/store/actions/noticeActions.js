export const createProject = (project,p1) => {
  return (dispatch, getState, { getFirebase }) => {

    const firestore = getFirebase().firestore()
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    console.log(project)
if(project.id1!=='a'){
 // alert('old data')
    firestore.collection('notice').doc(project.id1).set({
      ...project,
      authorFirstName: 'profile.firstname',
      authorLastName: 'profile.lastname',
      authorId: authorId,  
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_VisitingDr_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_Visiting_ERROR' }, err);
    });
  }else{
    firestore.collection('notice').doc().set({
      ...project,
      authorFirstName: 'profile.firstname',
      authorLastName: 'profile.lastname',
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_VisitingDr_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_Visiting_ERROR' }, err);
    });
  }


  }
};
