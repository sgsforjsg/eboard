import React, { useEffect, useState } from 'react'
import firebase from "firebase";
import { useForm } from "react-hook-form";
//import { connect } from 'react-redux'
import { connect } from "react-redux";
import { useDispatch } from 'react-redux'
import FileUploader from "react-firebase-file-uploader";
import { createProject } from '../../store/actions/noticeActions'
//import { Redirect } from 'react-router-dom'

import 'quill/dist/quill.snow.css';
import M from "materialize-css";

const CreateNotice1 = ({ project, id }) => {
  console.log(project, id)
  useEffect(() => {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
    var elems1 = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems1, {});
  }, []);




  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      furl: id !== 'a' ? project.furl : '',
      dept: id !== 'a' ? project.dept : '',
      firstName: id !== 'a' ? project.firstName : '',
      title: id !== 'a' ? project.title : '',
      age: id !== 'a' ? project.age : '',
      body1: id !== 'a' ? project.body1 : '',
      uploadProgress: 0,
      id1: id,
      quill: 'ff'
    }
  })
  const dispatch = useDispatch();
  const onSubmit = data => {
    // const qdata= JSON.stringify(quill.getContents())
    console.log(data)
    //alert('p')
     dispatch(createProject(data))
    // props.history.push('/view');
  }
  const myFunction = (e) => {
    const { value } = e.target;
    console.log('upload files ddd')

  }
  // function 
  const handleUploadStart1 = (e) => {
    /* const storageRef=firebase.storage().ref("images");
     const fileRef=storageRef.child(e.image[0].name);
     fileRef.put(e.image[0] ).then(()=>{
       const downloadUrl =  fileRef.getDownloadURL()
       setfurl(downloadUrl);
       console.log('ok',downloadUrl) 
       
     }).catch(err => {
      console.log('not ok')
     })
     alert('start')
      
   console.log('started',)*/

  }

  // funk for uploading library
  const handleUploadStart = () => {
    console.log('started')

  }

  const handleUploadError = error => {

    console.error(error);
  };
  const handleUploadSuccess = async filename => {
    const downloadURL = await firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL().then((url) => {
        setValue("furl", url)
        console.log(url, 'url')
      });
    console.log(filename)
  };
  const handleProgress = progress => {
    setValue('uploadProgress', progress)
    console.log(progress)
      ;
  }
  const deletefile = (e) => {
    e.preventDefault();
    var fileRef = firebase.storage().refFromURL(project.furl);
    fileRef.delete().then(function () {

      // File deleted successfully 
      console.log("File Deleted")
    }).catch(function (error) {
      // Some Error occurred 
    });
    console.log('delete file sucessfully')
  }
  return (
    <div className="container ">
      <form >
        <div className="row" style={{ margin: "0" }}>
          <div className="col s12">
            First Name
        <div className="input-field inline" style={{ margin: "0" }} >
              <input name="firstName" id="first_name" type="text" ref={register({ required: true, maxLength: 80 })} />
            </div>
          </div>
        </div>
        <div className="row" style={{ margin: "0" }}>
          <div className="col s12">
            Dept------:
        <div className="input-field inline" style={{ margin: "0" }}>
              <input name="dept" id="first_name" type="text" ref={register({ required: true, maxLength: 80 })} />
            </div>
          </div>
        </div>

        {id !== 'a' ? <img className="materialboxed" alt="Image" width="50" src={project.furl} /> : '-'}
        <input  hidden name='furl' type='text' ref={register()} />
        Body
        {project.body1}
        <div className="row teal"  style={{ margin: "0" }}>
          <div className="col s12">
            
        <div className="input-field" style={{ margin: "0" }}>
        <textarea name="body1" id="textarea1"  style={{minHeight: "10rem" }} className="materialize-textarea" ref={register({ required: true, maxLength: 80 })}></textarea>
                       
            </div>
          </div>
        </div>
        <input name='id1' style={{ display: 'none' }} type='text' ref={register} />
        
        <FileUploader
          accept="image/*"
          name="avatar"
          randomizeFilename
          storageRef={firebase.storage().ref("images")}
          onUploadStart={handleUploadStart}
          onUploadError={handleUploadError}
          onUploadSuccess={handleUploadSuccess}
          onProgress={handleProgress}
        />
        <p><input name='uploadProgress' defalt type='text' ref={register} /></p>

        <button onClick={deletefile}>delete file</button>
        <button onClick={handleSubmit(onSubmit)} >Subit</button>
      </form>
    </div>

  )
}
//const Hookform = connect()(CreateNotice);
//export default Hookform;
const mapStateToProps = (state, ownProps) => {
  //console.log(ownProps.match.params.id)
  let id = null
  if (ownProps.match.params.id) { id = ownProps.match.params.id }
  const projects = state.firestore.data.notice;
  const project = projects ? projects[id] : '--'
  console.log(project, id)
  return {
    project: project,
    auth: state.firebase.auth,
    id: id
  }
}

export default connect(mapStateToProps)(CreateNotice1)
