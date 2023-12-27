import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import axiosClient from "../axios-client.jsx";
import { useNavigate } from "react-router-dom";
import {useStateContext} from "../context/ContextProvider.jsx";

const TableItem = forwardRef((props, ref) => {

    const navigate = useNavigate();

    const { student, id, presentDate, lectureId } = props

    const date = new Date();
    let day = new Date(presentDate).getDate();
    let month = new Date(presentDate).getMonth() + 1;
    let year = new Date(presentDate).getFullYear();

    const [attendance, setAttendance] = useState({ 
      id: null,
      student_id: id,     
      lecture_id: lectureId,
      status_id: '1' || null,
      attendance_time: `${year}-${month}-${day}`
    })
 
    const [statuses, setStatus] = useState([])
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null)
    const {setNotification} = useStateContext()

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
        return
      }
      console.log(attendance)
      axiosClient.post('/attendances', attendance) 
      .then(() => {
        setNotification('Attendance was successfully created')
        navigate('/manageSubjects')  
        // window.confirm("Attendance successfully done")
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
