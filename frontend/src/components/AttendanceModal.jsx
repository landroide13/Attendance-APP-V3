import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import axiosClient from "../axios-client.jsx"
import {useStateContext} from "../context/ContextProvider.jsx";

function AttendanceModal({ open, onClose, id }) {

    if (!open) return null;

    const navigate = useNavigate();

    const [errors, setErrors] = useState(null)
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState([]);
    const [attendance, setAttendance] = useState({
        id: null,
        status_id: '',
        attendance_time: '',
        enrol_student_id: ''
    })

    useEffect(() => {
        getStatus();
        setLoading(true)
        axiosClient.get(`/attendances/${id}`)
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
        axiosClient.put(`/attendances/${id}`, attendance) 
        .then(() => {
          window.confirm("Status successfully Edited")
           navigate('/dashboard')
           onClose;
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
    <div class="card" style={{ ...styles.main }}>
        
        <div class="card-body">

            <h5>Edit Status #{ id } </h5>

            { !loading && (
            <form onSubmit={handleEdit}>

                <input type="text" value={attendance.attendance_time} hidden/>

                <input type="text" value={attendance.enrol_student_id} hidden/>

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