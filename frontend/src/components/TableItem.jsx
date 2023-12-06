import React, { useState, useEffect, forwardRef, useImperativeHandle, } from 'react'
import axiosClient from "../axios-client.jsx";

const TableItem = (props) => {

    const { student, id, presentDate } = props
    const date = new Date();

    const [attendance, setAttendance] = useState({
      id: null,
      enrol_student_id: id, 
      status_id: '',
      attendance_time: presentDate  
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


  const handleSubmit = ev => {
    ev.preventDefault()
    let checkDate = new Date(presentDate)

    if (checkDate.getTime() > date.getTime()) {
      window.confirm("The given date is in the futre, action not allow.")
      console.log('The given date is in the future.');
      return
    }

    console.log(attendance)
    axiosClient.post('/attendances', attendance) 
    .then(() => {
      //navigate('/dashboard')
      window.confirm("Attendance successfully done")
      //setNotification('User was successfully created')
    })
    .catch(err => {
      const response = err.response;
      if (response && response.status === 422) {
        setErrors(response.data.errors)
      }})
    }

    const handleChange = ev => {
      setAttendance({...attendance, status_id: ev.target.value})
    }

    useEffect(() => {     
        getStatus()
      }, []);

  return (
      <form onSubmit={handleSubmit} key={ student.id } className='row ul-widget1 mb-3'>
        <select className="col-md-2 form-control"  onChange={handleChange}>
        <option>...</option>
        { statuses.map(status => (
                               
          <option key={status.id} value={status.id}>{status.name}</option>
                  
          ))}      
        </select> 

        <div className="form-text ml-3"><span className="" href="#" value={student.id}>{ student.first_name } { student.last_name }</span></div>
        <div className="btn-group col-md-4 offset-md-8 mb-3 ml-5 d-flex flex-row" role="group">
          <button type="submit" className="btn btn-sm btn-primary p-2">Save</button>
          <button type="button" className="btn btn-sm btn-info ml-3 p-2">Notify</button>
        </div>

      </form>
  )
}

export default TableItem
