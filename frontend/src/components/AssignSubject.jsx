import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../axios-client.jsx";
import {useStateContext} from "../context/ContextProvider.jsx";

function AssignSubject() {

    const navigate = useNavigate();

    const [tutorId, setTutorId] = useState('')
    const [lectureId, setLectureId] = useState('')

    const [tutors, setTutor] = useState([])
    const [lectures, setLectures] = useState([])
    const [loading, setLoading] = useState(false);
    const {setNotification} = useStateContext()
    const [errors, setErrors] = useState(null)

    useEffect(() => {     
        getUsers();
        getlectures();   
      }, []);

    const getUsers = () => {
        setLoading(true)
        axiosClient.get('/users')
          .then(({ data }) => {
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

      const getlectures = () => {
        setLoading(true)
        axiosClient.get('/lectures')
          .then(({ data }) => {
            setLectures(data.data)
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
      
      const handleLecture = ev => {
        setLectureId(ev.target.value)
      }
  
      const handleTutor = ev => {
        setTutorId(ev.target.value)
      }


    const onSubmit = ev => {
        ev.preventDefault()
        axiosClient.post(`/lectures/${tutorId}/assing`, { lecture_id: lectureId } ) 
        .then(() => {
          navigate('/manageSubjects') 
          window.confirm("Subject was successfully Assign")
          setNotification('Subject was successfully Assign')
        })
        .catch(err => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors)
          }
        })
    }

    const filteredtutor =  tutors.filter(user => user.role == 'tutor')
   
    return (
        <div className="mb-4">
            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-md-6 form-group mb-3">
                        <label htmlFor="firstName1">Select Lecture</label>
                        <select className="form-control"  onChange={handleLecture}>
                            <option>...</option>
                            { lectures.map(lecture => (
                                   
                                <option key={lecture.id} value={lecture.id}>{lecture.lecture_name} / {lecture.term.term} - {lecture.term.year}</option>
                        
                            ))}
                        </select>
                    </div>
                    
                    <div className="col-md-6 form-group mb-3">
                        <label htmlFor="picker1">Select Tutor</label>
    
                         
                            
                        <select className="form-control"  onChange={handleTutor}>
                            <option>...</option>
                            {filteredtutor.map(tutor => (
                                <option key={tutor.id} value={tutor.id}>{tutor.first_name} {tutor.last_name}</option>
                            ))}
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

export default AssignSubject