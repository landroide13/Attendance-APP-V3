import React, { useState, useEffect } from 'react'
import axiosClient from "../axios-client.jsx";

function TableItem(props) {

    const { student, id } = props

    const [attendance, setAttendance] = useState({
      id: null,
      enrol_student_id: id, 
      status_id: '',  
    })
 

    const [statuses, setStatus] = useState([])
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null)

    const getStatus = () => {
        setLoading(true)
        axiosClient.get('/status')
          .then(({ data }) => {
            setStatus(data.data)
            //console.log(data.data)
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
      axiosClient.post('/attendances', attendance) 
      .then(() => {
        console.log(attendance)
        navigate('/dashboard')
        window.confirm("Attendance successfully done")
        //setNotification('User was successfully created')
      })
      .catch(err => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors)
        }
      })
  }

    useEffect(() => {     
        getStatus()
      }, []);


  return (
    <div key={ student.id } className="ul-widget1">
  
      <form className='row' onSubmit={onSubmit}>
        <select className="form-control col-md-2 "  onChange={ev => setAttendance({...attendance, status_id: ev.target.value})}>
        <option>...</option>
        { statuses.map(status => (
                               
          <option key={status.id} value={status.id}>{status.name}</option>
                    
          ))}
        </select> 

          <div className="ul-widget2__info"><option className="ul-widget2__title" href="#" value={student.id}># {id} - { student.first_name } { student.last_name } </option></div>
          <div className="ul-widget2__actions">
            <button className="btn btn-primary mt-3">Save</button>
            <button className="btn btn-info mt-3">Notify</button>
          </div>
      </form>

    </div>
  )
}

export default TableItem
