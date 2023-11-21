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
        <select className="col-md-2 form-control"  onChange={ev => setAttendance({...attendance, status_id: ev.target.value})}>
        <option>...</option>
        { statuses.map(status => (
                               
          <option key={status.id} value={status.id}>{status.name}</option>
                    
          ))}
        </select> 

          <div className="form-text ml-3"><span className="" href="#" value={student.id}>{ student.first_name } { student.last_name }</span></div>
          <div className="btn-group mb-3 ml-5" role="group">
            <button type="submit" className="btn btn-sm btn-primary">Save</button>
            <button type="button" className="btn btn-sm btn-info ml-3">Notify</button>
          </div>
          
      </form>

    </div>
  )
}

export default TableItem
