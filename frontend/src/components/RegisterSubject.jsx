import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../axios-client.jsx";
import {useStateContext} from "../context/ContextProvider.jsx";

function RegisterSubject() {

    const navigate = useNavigate();

    const [lecture, setLecture] = useState({
        id: null,
        lecture_name: '', 
        user_id:'',  
    })

    const [tutors, setTutor] = useState([])
    const [loading, setLoading] = useState(false);
    const {setNotification} = useStateContext()
    const [errors, setErrors] = useState(null)

    useEffect(() => {     
        getUsers();
      }, []);

    const getUsers = () => {
        setLoading(true)
        axiosClient.get('/users')
          .then(({ data }) => {
            console.log(data.data)
            setTutor(data.data)
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


    const onSubmit = ev => {
        ev.preventDefault()
        axiosClient.post('/lectures', lecture) 
        .then(() => {
          console.log(lecture)
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

 
    const filtered =  tutors.filter(tutor => tutor.role.name == 'tutor')


  return (
    <div className="mb-4">
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-md-6 form-group mb-3">
                    <label htmlFor="firstName1">Lecture Name</label>
                    <input className="form-control" value={lecture.lecture_name}  onChange={ev => setLecture({...lecture, lecture_name: ev.target.value})} id="firstName1" type="text" placeholder="Enter Subject Name" required />
                </div>
                
                <div className="col-md-6 form-group mb-3">
                    <label htmlFor="picker1">Select</label>
                    
                        {loading && 
                            <select className="form-control">
                                <option>...</option>
                            </select>
                        }

                        {!loading &&
                        
                        <select className="form-control"  onChange={ev => setLecture({...lecture, user_id: ev.target.value})}>
                            {filtered.map(tutor => (
                               
                              <option key={tutor.id} value={tutor.id}>{tutor.first_name} {tutor.last_name}</option>
                    
                            ))}
                        </select>
                        
                        }
                </div>
                <div className="col-md-12">
                    <button className="btn btn-primary">Register</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default RegisterSubject