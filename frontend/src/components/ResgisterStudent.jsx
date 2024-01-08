import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axiosClient from "../axios-client.jsx";
import {useStateContext} from "../context/ContextProvider.jsx";

function ResgisterStudent() {

    const navigate = useNavigate();

    const [selectedFile, setSelectedFile] = useState(null);
    const [subjects, setSubjects] = useState([]);
    const [lecture, setLecture] = useState('');

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

    const [loading, setLoading] = useState(false);
    const {setNotification} = useStateContext()
    const [errors, setErrors] = useState(null)

    const getSubjects = () => {
        setLoading(true)
        axiosClient.get('/lectures')
          .then(({ data }) => {
            setSubjects(data.data)
            setLoading(false)
          })
          .catch(() => {
            const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors)
          }
          setLoading(false)
        })
    }

    useEffect(() => {
        getSubjects();
    }, [])


    const onSubmit = ev => {
        ev.preventDefault()
        console.log(student)
        setLoading(true)
        axiosClient.post('/students', student) 
        .then(() => {
          navigate('/manageStudents')
          window.confirm("Student was successfully created")
          setNotification('Student was successfully created')
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

    const handleLecture = ev =>{
        setLecture(ev.target.value)
    }

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
            window.confirm("File upload successfully created")
            console.log('File uploaded successfully', response.data);
        })
        .catch(err => {
            console.error('Error uploading file', err);
        })
    }


  return (
    <div className="col-md-12">

        <form onSubmit={onSubmit}>       
            <div className="row col-md-12">
                <div className="col-md-4 form-group mb-3">
                    <label htmlFor="firstName1">First name</label>
                    <input className="form-control" value={student.first_name}  onChange={ev => setStudent({...student, first_name: ev.target.value})} id="firstName1" type="text" placeholder="Enter your first name" required />
                </div>
                <div className="col-md-4 form-group mb-3">
                    <label htmlFor="lastName1">Last name</label>
                    <input className="form-control" value={student.last_name}  onChange={ev => setStudent({...student, last_name: ev.target.value})} id="lastName1" type="text" placeholder="Enter your last name" required/>
                </div>

                <div className="col-md-4 form-group mb-3">
                    <label htmlFor="exampleInputEmail1">Select Course</label>
                    <select className="form-control" onChange={handleLecture}>
                        <option>----</option>
                        { subjects.map(subject => (
                            <option key={subject.id} value={subject.id}>{ subject.lecture_name } / {subject.term.term} - { subject.term.year}</option>
                        ))}
                    </select> 
                </div>
                
                <div className="row col-md-12 g-3">
                    <div className="col-md-4 form-group mb-3">
                        <label htmlFor="exampleInputEmail1">Birth Date</label>
                        <input className="form-control"  id="exampleInputEmail1" onChange={ev => setStudent({...student, birth_date: ev.target.value})} type="date" placeholder="Date birth" required/>     
                    </div>

                    <div className="col-md-4 form-group mb-3">
                        <label htmlFor="exampleInputEmail1">School of Thoughts</label>
                        <select className="form-control" onChange={ev => setStudent({...student, school_thoughts: ev.target.value})}>
                            <option>----</option>
                            <option value={"Hanfi"}>Hanfi</option>
                            <option value={"Shafei"}>Shafei</option>
                            <option value={"Maliki"}>Maliki</option>
                            <option value={"Hanbali"}>Hanbali</option>
                        </select>     
                    </div>

                    <div className="col-md-4 form-group mb-3">
                        <label htmlFor="exampleInputEmail1">Student Studying</label>
                        <select className="form-control" onChange={ev => setStudent({...student, student_studying: ev.target.value})}>
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
                    <textarea className="form-control" onChange={ev => setStudent({...student, aditional_info: ev.target.value})}  id="exampleInputEmail1" rows='2' type="text" placeholder="Allergy/Disability" required></textarea>     
                </div>

                <div className="col-md-2 form-group mb-3">
                    <label htmlFor="picker1">Gender</label>
                    <select className="form-control"  onChange={ev => setStudent({...student, gender: ev.target.value})}>
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
                        <button className="btn btn-primary">Register</button>  
                    </div>
                    
                </div>
 
            </div>
        </form>

        <hr />
        <h5 className=''>Bulk Import</h5>
       
        <form onSubmit={handleUpload} className="row">

            <div className="col-md-4">
                <input className="form-control" onChange={handleFileChange} type="file" accept=".csv" id="formFile" />
            </div>

            <div className="col-md-2">
                <button type='submit' className="btn btn-success mb-3">Import</button>
            </div>  

        </form>
        
    </div>
  )
}

export default ResgisterStudent