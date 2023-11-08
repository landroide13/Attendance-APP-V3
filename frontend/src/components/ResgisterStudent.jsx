import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axiosClient from "../axios-client.jsx";
import {useStateContext} from "../context/ContextProvider.jsx";

function ResgisterStudent() {

    const navigate = useNavigate();

    const [student, setStudent] = useState({
        id: null,
        first_name: '', 
        last_name:'',  
        parent_email: '',
        parent_phone: '',
        gender: '',
    })

    const [loading, setLoading] = useState(false);
    const {setNotification} = useStateContext()
    const [errors, setErrors] = useState(null)


    const onSubmit = ev => {
        ev.preventDefault()
        axiosClient.post('/students', student) 
        .then(() => {
          console.log(student)
          navigate('/dashboard')
          window.confirm("User was successfully created")
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
            <div className="row">
                <div className="col-md-6 form-group mb-3">
                    <label htmlFor="firstName1">First name</label>
                    <input className="form-control" value={student.first_name}  onChange={ev => setStudent({...student, first_name: ev.target.value})} id="firstName1" type="text" placeholder="Enter your first name" required />
                </div>
                <div className="col-md-6 form-group mb-3">
                    <label htmlFor="lastName1">Last name</label>
                    <input className="form-control" value={student.last_name}  onChange={ev => setStudent({...student, last_name: ev.target.value})} id="lastName1" type="text" placeholder="Enter your last name" required/>
                </div>
                <div className="col-md-6 form-group mb-3">
                    <label htmlFor="exampleInputEmail1">Parent Email</label>
                    <input className="form-control" value={student.parent_email}  onChange={ev => setStudent({...student, parent_email: ev.target.value})} id="exampleInputEmail1" type="email" placeholder="Enter email" required/>     
                </div>
                <div className="col-md-6 form-group mb-3">
                    <label htmlFor="exampleInputEmail1">Parent Phone</label>
                    <input className="form-control" value={student.parent_phone}  onChange={ev => setStudent({...student, parent_phone: ev.target.value})} id="exampleInputEmail1" type="text" placeholder="Enter Phone" required/>     
                </div>

                <div className="col-md-6 form-group mb-3">
                    <label htmlFor="picker1">Gender</label>
                    <select className="form-control"  onChange={ev => setStudent({...student, gender: ev.target.value})}>
                        <option value={"male"}>Male</option>
                        <option value={"female"}>Female</option>
                    </select>
                </div>

                <div className="col-md-12">
                    <button className="btn btn-primary">Register</button>
                </div>
            </div>
        </form>

    </div>
  )
}

export default ResgisterStudent