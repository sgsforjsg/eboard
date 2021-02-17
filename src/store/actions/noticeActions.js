export const createProject = (project) => {
  return (dispatch, getState, {getFirebase}) => {
    
    const firestore = getFirebase().firestore()
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
     console.log(profile)   
    firestore.collection('notice').doc('a').set({
      ...project,
      authorFirstName: profile.firstname,
      authorLastName: profile.lastname,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_VisitingDr_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_Visiting_ERROR' }, err);
    });
  }
};
