import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import axiosClient from "../axios-client.jsx"
import {useStateContext} from "../context/ContextProvider.jsx";

function StudentModal({ open, onClose, id }) {

    if (!open) return null

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({})
    const {setNotification} = useStateContext()

    //const navigate = useNavigate(); 

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
        school_thoughts: '',   
        student_studying: '',
        aditional_info: '',
        birth_date: ''
    })

    useEffect(() => {
        setLoading(true)
        axiosClient.get(`/students/${id}`)
          .then(({data}) => {
            setStudent(data.data)
            setLoading(false)
          })
          .catch(() => {
            setLoading(false)
          })
    }, [])

    const styles = {
        main: {
            backgroundColor: '#fefefe',
            width: "60%",
            position: "fixed",
            top: '9em',
            left: '18em',  
            height: "75%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
        },
        inputText: {
          padding: "10px",
          color: "red",
        },
    };

    const handleEdit = ev => {
        ev.preventDefault()
        console.log(student)
        axiosClient.put(`/students/${student.id}`, student) 
        .then(() => {
          window.confirm("Student successfully Edited")
          setNotification('Student successfully Edited')
          onClose();
          //navigate('/dashboard')
        })
        .catch(err => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors)
            console.log(errors + " " + response)
          }
        })
    }

  return (
    <div className="card" style={{ ...styles.main }}>
        <div className="card-body" >

            { !loading && ( 
            <form onSubmit={handleEdit}>       
                <div className="row col-md-12">
                    <div className="col-md-4 form-group mb-3">
                        <label htmlFor="firstName1">First name</label>
                        <input className="form-control" value={student.first_name}  onChange={ev => setStudent({...student, first_name: ev.target.value})} id="firstName1" type="text" placeholder="Enter your first name" required />
                    </div>
                    <div className="col-md-4 form-group mb-3">
                        <label htmlFor="lastName1">Last name</label>
                        <input className="form-control" value={student.last_name}  onChange={ev => setStudent({...student, last_name: ev.target.value})} id="lastName1" type="text" placeholder="Enter your last name" required/>
                    </div>

                    <div className="row col-md-12 g-3">
                        <div className="col-md-4 form-group mb-3">
                            <label htmlFor="exampleInputEmail1">Birth Date</label>
                            <input value={student.birth_date} className="form-control"  id="exampleInputEmail1" onChange={ev => setStudent({...student, birth_date: ev.target.value})} type="date" placeholder="Date birth" required/>     
                        </div>    

                        <div className="col-md-4 form-group mb-3">
                            <label htmlFor="exampleInputEmail1">School of Thoughts</label>
                            <select value={student.school_thoughts} className="form-control" onChange={ev => setStudent({...student, school_thoughts: ev.target.value})}>
                                <option>----</option>
                                <option value={"Hanfi"}>Hanfi</option>
                                <option value={"Shafei"}>Shafei</option>
                                <option value={"Maliki"}>Maliki</option>
                                <option value={"Hanbali"}>Hanbali</option>
                            </select>     
                        </div>

                        <div className="col-md-4 form-group mb-3">
                            <label htmlFor="exampleInputEmail1">Student Studying</label>
                            <select value={student.student_studying}  className="form-control" onChange={ev => setStudent({...student, student_studying: ev.target.value})}>
                                <option>----</option>
                                <option value={"Qaaidah"}>Qaaidah</option>
                                <option value={"Juz Amma"}>Juz Amma</option>
                                <option value={"Quran"}>Quran</option>
                                <option value={"None"}>None</option>
                            </select> 
                        </div>
                    </div>

                    <div className="col-md-10 form-group mb-3">
                        <label htmlFor="exampleInputEmail1">Aditional Information</label>
                        <textarea value={student.aditional_info} className="form-control" onChange={ev => setStudent({...student, aditional_info: ev.target.value})}  id="exampleInputEmail1" rows='2' type="text" placeholder="Allergy/Disability" required></textarea>     
                    </div>

                    <div className="col-md-2 form-group mb-3">
                        <label htmlFor="picker1">Gender</label>
                        <select value={student.gender} className="form-control"  onChange={ev => setStudent({...student, gender: ev.target.value})}>
                            <option>----</option>
                            <option value={"Male"}>Male</option>
                            <option value={"Female"}>Female</option>
                        </select>
                    </div>

                    <div className="row col-md-12 g-3">
                        <div className="col-auto form-group">
                            <label htmlFor="exampleInputEmail1">Parent Name</label>
                            <input className="form-control" value={student.parent_name}  onChange={ev => setStudent({...student, parent_name: ev.target.value})} id="exampleInputEmail1" type="text" placeholder="Enter parent name" required/>     
                        </div>
                        <div className="col-auto form-group">
                            <label htmlFor="exampleInputEmail1">Parent Email</label>
                            <input className="form-control" value={student.parent_email}  onChange={ev => setStudent({...student, parent_email: ev.target.value})} id="exampleInputEmail1" type="email" placeholder="Enter parent email" required/>     
                        </div>
                        <div className="col-auto form-group">
                            <label htmlFor="exampleInputEmail1">Parent Phone</label>
                            <input className="form-control" value={student.parent_phone}  onChange={ev => setStudent({...student, parent_phone: ev.target.value})} id="exampleInputEmail1" type="text" placeholder="Enter parent Phone" required/>     
                        </div>
                    </div>

                    <div className="row col-md-12 g-3">
                        <div className="col-auto form-group">
                            <label htmlFor="exampleInputEmail1">Parent-2 Name</label>
                            <input className="form-control" value={student.parent_2_name}  onChange={ev => setStudent({...student, parent_2_name: ev.target.value})} id="exampleInputEmail1" type="text" placeholder="Enter parent 2 name" required />     
                        </div>
                        <div className="col-auto form-group">
                            <label htmlFor="exampleInputEmail1">Parent-2 Email</label>
                            <input className="form-control" value={student.parent_2_email}  onChange={ev => setStudent({...student, parent_2_email: ev.target.value})} id="exampleInputEmail1" type="email" placeholder="Enter parent 2 email" required/>     
                        </div>
                        <div className="col-auto form-group">
                            <label htmlFor="exampleInputEmail1">Parent-2 Phone</label>
                            <input className="form-control" value={student.parent_2_phone}  onChange={ev => setStudent({...student, parent_2_phone: ev.target.value})} id="exampleInputEmail1" type="text" placeholder="Enter parent 2 Phone" required/>     
                        </div>

                        <div className="col-md-8 offset-md-10">
                            <button className="btn btn-primary">Edit</button> 
                            <button className="btn btn-danger" onClick={onClose}>Close</button>  
                        </div>
                        
                    </div>
                </div>
            </form>
            )}
        </div> 
    </div>                       
  )
}

export default StudentModal