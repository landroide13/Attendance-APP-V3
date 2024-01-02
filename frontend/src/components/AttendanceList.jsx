import React, { useState, useEffect } from 'react'
import axiosClient from "../axios-client.jsx";
import {useStateContext} from "../context/ContextProvider.jsx";
import AttendanceModal from './AttendanceModal.jsx';

function AttendanceList() {

    const [subjects, setSubjects] = useState([])
    const [option, setOption] = useState('')

    const [attendanceId, setAttendanceId] = useState(null);

    const [open, setOpen] = useState(false)  

    const [loading, setLoading] = useState(false);  
    const {setNotification} = useStateContext()
    const [errors, setErrors] = useState(null)
  
    const filtered =  subjects.filter(subject => subject.id === option)
    
    const [{ attendance } = { }] = filtered.length > 0 ? filtered : [{}] 

    const [{ students } = { }] = filtered.length > 0 ? filtered : [{}] 

    console.log(filtered)

    useEffect(() => {     
        getSubjects();
      }, []); 

    const getSubjects = () => {
        setLoading(true)
        axiosClient.get('/lectures')
          .then(({ data }) => {
            setSubjects(data.data)  
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

    const studentName = id => {
      let student = students && students.filter(student => student.id === id)
      const [ data ] = student
      const { first_name, last_name } = data || { }
      console.log(first_name)
      return first_name + " " + last_name
    }

    const optionName = id => {
      let subject =  subjects.filter(subject => subject.id === id)
      const [{ lecture_name }] = subject
      return lecture_name
    }
    
    const handleAttendance = id => {
      setAttendanceId(id)
      setOpen(true)
    }

    const handleClose = () =>{
      setOpen(false)
    }

  return (
    <div className="col-lg-12 col-md-12 col-xl-12 mb-3">

      <div className="ul-widget__head pb-20 v-margin">
        <div className="ul-widget__head-label">
          <h3 className="ul-widget__head-title">List Attendance</h3>
        </div>
        <button className="btn btn-info dropdown-toggle _r_btn border-0" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{ option && optionName(option) || 'Select' }</button>
        <div className="dropdown-menu" x-placement="bottom-start" style={{ position: 'absolute', top: 0, left: 0 }}>
          {
            subjects.map(subject => (
              <a className="dropdown-item ul-widget__link--font" key={subject.id}  onClick={() => setOption(subject.id)}>{ subject.lecture_name }</a>
            ))
          }  
        </div>
        <button className="btn btn-outline-info btn-sm ml-5" href="#" data-toggle="modal" data-target="#exampleModalLong" >Export PDF</button>
        <button className="btn btn-outline-info btn-sm ml-5" href="#" data-toggle="modal" data-target="#exampleModalLong" >Export CSV</button>
      </div>
      <div className="ul-widget__body"> 
        <div className="ul-widget1">

        <div className="table-responsive">
          <table className="table table-striped dataTable-collapse">
            <thead>
              <tr>
                <th  scope="col" >Date</th>
                <th  scope="col" >Student Name</th>
                <th  scope="col" >status</th>
                </tr>
            </thead>

            <tbody className="table-group-divider">

              <td> 
                {attendance && attendance.map(att => (
                         
                  <tr  key={ att.id } onClick={() => handleAttendance(att.id)} style={{ fontSize: '1.2em' }} >{ new Date(att.attendance_time).getDate() }/{ new Date(att.attendance_time).getMonth() + 1 }/{ new Date(att.attendance_time).getFullYear() }</tr>
                  
                ))}
              </td>   

              <td >
                {attendance && attendance.map(att => {

                 const[ data ] = studentName(att.student_id)
                  
     
                  return <tr key={att.id} style={{ fontSize: '1.2em' }} >{ studentName(att.student_id) }</tr>
                                  
                }) }
              </td> 

              <td > 
                {attendance && attendance.map(att => (
                         
                  <tr  key={ att.id } style={{ fontSize: '1.2em' }} >{ att.status}</tr>
                
                ))}
              </td>   
            
              { attendanceId &&
                         
                <AttendanceModal 
                attendanceId={attendanceId}
                onClose={handleClose}   
                open={open} />
              }
                      
            </tbody>
          </table>
        </div>
      </div>

        <div className="dataTables_paginate paging_simple_numbers mt-5 col-md-8 offset-md-4" id="user_table_paginate">
          <ul className="pagination">

            <li className="paginate_button page-item previous" id="user_table_previous">
              <a href="#" aria-controls="user_table" data-dt-idx="0"  className="page-link">Previous</a>
            </li> 

            <li className="paginate_button page-item next" id="user_table_next">
              <a href="#" aria-controls="user_table" data-dt-idx="2"   className="page-link">Next</a>
            </li>

          </ul>
        </div>

      </div>                           
    </div>
  )
}

export default AttendanceList