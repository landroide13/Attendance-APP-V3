import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../axios-client.jsx";
import {useStateContext} from "../context/ContextProvider.jsx";

function RegisterSubject() {

    const navigate = useNavigate();

    const [lecture, setLecture] = useState({
        id: null,
        lecture_name: '', 
        description:'',  
    })

    const [loading, setLoading] = useState(false);
    const {setNotification} = useStateContext()
    const [errors, setErrors] = useState(null)

    const onSubmit = ev => {
        ev.preventDefault()
        axiosClient.post('/lectures', lecture) 
        .then(() => {
          navigate('/dashboard')
          window.confirm("Subject was successfully created")
          //setNotification('User was successfully created')
        })
        .catch(err => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors)
          }
        })
    }

  return (
    <div className="mb-4">
        <form onSubmit={onSubmit}>
            <div className="col-md-8 offset-md-2">
                <div className="form-group mb-3">
                    <label htmlFor="firstName1">Lecture Name</label>
                    <input className="form-control" value={lecture.lecture_name}  onChange={ev => setLecture({...lecture, lecture_name: ev.target.value})} id="firstName1" type="text" placeholder="Enter Subject Name" required />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="firstName1">Lecture Description</label>
                    <input className="form-control" value={lecture.lecture_name}  onChange={ev => setLecture({...lecture, description: ev.target.value})} id="firstName1" type="text" placeholder="Enter Subject Name" required />
                </div>
                
                <div className="col-md-12">
                    <button className="btn btn-primary">Create</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default RegisterSubject