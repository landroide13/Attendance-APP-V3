import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import axiosClient from "../axios-client.jsx";

const TableItem = forwardRef((props, ref) => {

    const { student, id, presentDate } = props
    const date = new Date();
    
    let day = new Date(presentDate).getDate();
    let month = new Date(presentDate).getMonth() + 1;
    let year = new Date(presentDate).getFullYear();
    let attendanceDay =  `${year}-${month}-${day}`;

    const [attendance, setAttendance] = useState({
      id: null,
      enrol_student_id: id, 
      status_id: '1' || null,
      attendance_time: `${year}-${month}-${day}`
    })

    console.log(attendanceDay)
 
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

    useImperativeHandle(ref, () => ({
      handleSubmit(){
      
      let checkDate = new Date(presentDate)

      if (checkDate.getTime() > date.getTime()) {
        window.confirm("The given date is in the futre, action not allow.")
        console.log('The given date is in the future.');
        return
      }

      console.log(attendance)
      axiosClient.post('/attendances', attendance) 
      .then(() => {
        navigate('/dashboard')
        window.confirm("Attendance successfully done")
        //setNotification('User was successfully created')
      })
      .catch(err => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors)
        }})
      }
    }))

    const handleChange = ev => {
      setAttendance({...attendance, status_id: ev.target.value})
    }

    useEffect(() => {     
        getStatus()
      }, []);

  return (
      <form key={ student.id } className='ul-widget1 mb-3'>

        <div className="d-flex flex-row justify-content-start">
          <select className="col-md-2 form-control"  onChange={handleChange}>
          <option>...</option>
          { statuses.map(status => (
                                
            <option key={status.id} value={status.id}>{status.name}</option>
                    
            ))}      
          </select>    

          <div className="form-text ml-3"><span className="" href="#" value={student.id}>{ student.first_name } { student.last_name }</span></div>
         
        </div>

      </form>
  )
})

export default TableItem
