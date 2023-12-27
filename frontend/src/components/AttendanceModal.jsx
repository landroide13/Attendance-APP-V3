import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import axiosClient from "../axios-client.jsx"
import {useStateContext} from "../context/ContextProvider.jsx";

function AttendanceModal({ open, onClose, attendanceId }) {

    if (!open) return null;

    const navigate = useNavigate();

    const [errors, setErrors] = useState(null)
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState([]);
    const [attendance, setAttendance] = useState({
        id: null,
        status_id: '',
        attendance_time: '',
        student_id: '',
        lecture_id: ''
    })

    useEffect(() => {
        getStatus();
        setLoading(true)
        axiosClient.get(`/attendances/${attendanceId}`)
          .then(({data}) => {
            setAttendance(data.data)
            setLoading(false)
          })
          .catch(() => {
            setLoading(false)
          })
      }, [])

      const getStatus = () => {  
        setLoading(true)
        axiosClient.get('/status')
        .then(({ data }) => {
          setStatus(data.data)
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

    const styles = {
        main: {
            backgroundColor: '#fefefe',
            width: "30%",
            position: "fixed",
            top: '9em',
            left: '29em',  
            height: "45%",
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
        console.log(attendance)  
        axiosClient.put(`/attendances/${attendanceId}`, attendance) 
        .then(() => {
          window.confirm("Status successfully Edited")
           navigate('/dashboard')
           onClose;
          setNotification('Status successfully Edited')
        })
        .catch(err => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors)
          }
        })
    }

  return (
    <div className="card" style={{ ...styles.main }}>
        
        <div class="card-body">

            <h5>Edit Attendance </h5>
            <h6> #{ attendanceId } </h6>

            { !loading && (
            <form onSubmit={handleEdit}>

                <input type="text" value={attendance.student_id} onChange={ev => setAttendance({...attendance, student_id: ev.target.value })} hidden/>

                <div className='mb-3'>
                  <label class="form-label">Date</label>
                  <input className="form-control" type="date" value={attendance.attendance_time}  onChange={ev => setAttendance({...attendance, attendance_time: ev.target.value })} />
                </div>
               
                <div class="mb-3">
                    <label class="form-label">Status</label>

                    <select className="form-control"  onChange={ev => setAttendance({...attendance, status_id: ev.target.value })}>
                        <option>...</option>
                        {status.map(status => (  
                            <option key={status.id} value={status.id}>{status.name}</option>
                        ))}
                    </select>

                </div>   
                
                <div className="">
                    <button type="submit" class="btn btn-primary">Edit</button>
                    <a href="#" class="btn btn-danger ml-5 mt-7" onClick={onClose}>Close</a>
                </div>

            </form>
            )}
        </div>

    </div>
  )
}

export default AttendanceModal