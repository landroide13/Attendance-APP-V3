import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axiosClient from "../axios-client.jsx";
import {useStateContext} from "../context/ContextProvider.jsx";

function ResgisterStudent() {

    const navigate = useNavigate();

    const [selectedFile, setSelectedFile] = useState(null);

    const [student, setStudent] = useState({
        id: null,
        first_name: '', 
        last_name:'', 
        parent_email: '',
        parent_phone: '',
        parent_name: '', 
        parent_2_name: '',
        parent_2_email:'',
        parent_2_phone: '',
        gender: '',  
    })

    const [loading, setLoading] = useState(false);
    const {setNotification} = useStateContext()
    const [errors, setErrors] = useState(null)


    const onSubmit = ev => {
        ev.preventDefault()
        console.log(student)
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

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = ev =>{
        ev.preventDefault()

        const formData = new FormData();
        formData.append('file', selectedFile);

        axiosClient.post('http://localhost/api/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(() => {
            navigate('/dashboard')
            window.confirm("User was successfully created")
            console.log('File uploaded successfully', response.data);
        })
        .catch(err => {
            console.error('Error uploading file', err);
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
                    <label htmlFor="exampleInputEmail1">Parent Name</label>
                    <input className="form-control" value={student.parent_name}  onChange={ev => setStudent({...student, parent_name: ev.target.value})} id="exampleInputEmail1" type="text" placeholder="Enter parent name" required/>     
                </div>
                <div className="col-md-6 form-group mb-3">
                    <label htmlFor="exampleInputEmail1">Parent Email</label>
                    <input className="form-control" value={student.parent_email}  onChange={ev => setStudent({...student, parent_email: ev.target.value})} id="exampleInputEmail1" type="email" placeholder="Enter parent email" required/>     
                </div>
                <div className="col-md-6 form-group mb-3">
                    <label htmlFor="exampleInputEmail1">Parent Phone</label>
                    <input className="form-control" value={student.parent_phone}  onChange={ev => setStudent({...student, parent_phone: ev.target.value})} id="exampleInputEmail1" type="text" placeholder="Enter parent Phone" required/>     
                </div>
                <div className="col-md-6 form-group mb-3">
                    <label htmlFor="exampleInputEmail1">Parent-2 Name</label>
                    <input className="form-control" value={student.parent_2_name}  onChange={ev => setStudent({...student, parent_2_name: ev.target.value})} id="exampleInputEmail1" type="text" placeholder="Enter parent 2 name" />     
                </div>
                <div className="col-md-6 form-group mb-3">
                    <label htmlFor="exampleInputEmail1">Parent-2 Email</label>
                    <input className="form-control" value={student.parent_2_email}  onChange={ev => setStudent({...student, parent_2_email: ev.target.value})} id="exampleInputEmail1" type="email" placeholder="Enter parent 2 email"/>     
                </div>
                <div className="col-md-6 form-group mb-3">
                    <label htmlFor="exampleInputEmail1">Parent-2 Phone</label>
                    <input className="form-control" value={student.parent_2_phone}  onChange={ev => setStudent({...student, parent_2_phone: ev.target.value})} id="exampleInputEmail1" type="text" placeholder="Enter parent 2 Phone"/>     
                </div>

                <div className="col-md-6 form-group mb-3">
                    <label htmlFor="picker1">Gender</label>
                    <select className="form-control"  onChange={ev => setStudent({...student, gender: ev.target.value})}>
                        <option>----</option>
                        <option value={"male"}>Male</option>
                        <option value={"female"}>Female</option>
                    </select>
                </div>

                <div className="col-md-12">
                    <button className="btn btn-primary">Register</button>  
                </div>
            </div>
        </form>

        
        <h5 className='mt-5'>Bulk Import</h5>
        <form action="" onSubmit={handleUpload}>

            <div className="col-md-6 form-group mb-3">
                <label htmlFor="formFile" className="form-label">Load CSV file</label>
                <input className="form-control" onChange={handleFileChange} type="file" id="formFile" />
            </div>

            <div className="col-md-12">
                <button className="btn btn-primary">Import</button>
            </div>  

        </form>
        
    </div>
  )
}

export default ResgisterStudent