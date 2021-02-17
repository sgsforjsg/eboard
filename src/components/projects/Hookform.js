import React, {useEffect} from 'react'
import { useForm } from "react-hook-form";
//import { connect } from 'react-redux'
import { connect } from "react-redux";
import { useDispatch } from 'react-redux'
import { createProject } from '../../store/actions/noticeActions'
//import { Redirect } from 'react-router-dom'
import M from "materialize-css";

function CreateNotice() {
    useEffect(() => {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems, {});  
      }, []);


    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch();
    const onSubmit = data => {
        dispatch(createProject(data))
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="firstName" defaultValue="test" ref={register} />
               
                <input name="firstName" ref={register({ required: true, maxLength: 20 })} />
                <input name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} />
                <input name="age" type="number" ref={register({ min: 18, max: 99 })} />

                <input type="submit" />
            </form>
        </div>

    )
}
const Hookform = connect()(CreateNotice);
export default Hookform;

