import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../axios-client.jsx";
import {useStateContext} from "../context/ContextProvider.jsx";

function EnrolStudent() {

    const navigate = useNavigate();

    const [studentId, setStudentId] = useState('')
    const [lectureId, setlectureId] = useState('')

    const [students, setStudent] = useState([])
    const [lectures, setLecture] = useState([])
    const [loading, setLoading] = useState(false);
    const {setNotification} = useStateContext()
    const [errors, setErrors] = useState(null)

    useEffect(() => {    
        getSubjects(); 
        getStudents();
      }, []);

    const getStudents = () => {
        setLoading(true)
        axiosClient.get('/students')
          .then(({ data }) => {
            setStudent(data.data)
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

      const getSubjects = () => {
        setLoading(true)
        axiosClient.get('/lectures')
          .then(({ data }) => {
            setLecture(data.data)
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

      const handleLectureId = ev => {
        setlectureId(ev.target.value)
      }
  
      const handleStudentId = ev => {
        setStudentId(ev.target.value)
      }
  


    const onSubmit = ev => {
        ev.preventDefault()

        axiosClient.post(`/students/${studentId}/enroll`, { lecture_id: lectureId }) 
        .then(() => {
          console.log(lectureId)
          navigate('/manageStudents')
          window.confirm("Enrolment successfully done")
          //setNotification('User was successfully created')
        })
        .catch(err => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors)
            console.log('Errors' + errors)
          }
        })
    }
   
  return (
    <div className="mb-4">
        <form onSubmit={onSubmit}>
            <div className="row">

                <div className="col-md-6 form-group mb-3">
                    <label htmlFor="picker1">Select Student</label>
                    
                        {loading && 
                            <select className="form-control">
                                <option>...</option>
                            </select>
                        }

                        {!loading &&
                        
                        <select className="form-control" onChange={handleStudentId}>
                             <option>...</option>
                            {students.map(student => (
                               
                              <option key={student.id} value={student.id}>{student.first_name} {student.last_name}</option>
                    
                            ))}
                        </select>
                        
                        }
                </div>

                <div className="col-md-6 form-group mb-3">
                    <label htmlFor="picker1">Select Subject</label>
                    
                        {loading && 
                            <select className="form-control">
                                <option>...</option>
                            </select>
                        }

                        {!loading &&
                        
                        <select className="form-control" onChange={handleLectureId}>
                             <option>...</option>
                            {lectures.map(lecture => (
                               
                              <option key={lecture.id} value={lecture.id}>{lecture.lecture_name}</option>
                    
                            ))}
                        </select>
                        
                        }
                </div>
                <div className="col-md-12">
                    <button className="btn btn-primary">Assign Subject</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default EnrolStudent