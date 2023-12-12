import React, { useState, useEffect } from 'react'
import axiosClient from "../axios-client.jsx";
import {useStateContext} from "../context/ContextProvider.jsx";
import AttendanceModal from './AttendanceModal.jsx';

function AttendanceList() {

    const [subjects, setSubjects] = useState([])
    const [option, setOption] = useState('')
    const [selectedItem, setSelectedItem] = useState(null);

    const [open, setOpen] = useState(false)

    const [date, setDate] = useState(null)
    const [enrols, setEnrol] = useState([])

    const [loading, setLoading] = useState(false);
    const {setNotification} = useStateContext()
    const [errors, setErrors] = useState(null)

    const filtered =  enrols.filter(enrol => enrol.lecture.lecture_name === option)

    const [prev, setPrev] = useState(0)
    const [next, seNext] = useState(2)

    useEffect(() => {     
        getSubjects();
        getEnrol();
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
    
    const getEnrol = () => {
        setLoading(true)
        axiosClient.get('/enrol')
          .then(({ data }) => {
            setEnrol(data.data)
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
    
    const handleAttendance = item => {
      setSelectedItem(item)
      setOpen(true)
    }

    const handleClose = () =>{
      setOpen(false)
    }

    const handlePrev = () => {
      setPrev(prev + 2)
      seNext(next - 2)
    }

    const handleNext = () => {
      seNext(next + 2)
      setPrev(prev - 2)  
    }

  return (
    <div className="col-lg-12 col-md-12 col-xl-12 mb-3">

      <div className="ul-widget__head pb-20 v-margin">
        <div className="ul-widget__head-label">
          <h3 className="ul-widget__head-title">List Attendance</h3>
        </div>
        <button className="btn btn-info dropdown-toggle _r_btn border-0" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{ option || 'Select' }</button>
        <div className="dropdown-menu" x-placement="bottom-start" style={{ position: 'absolute', top: 0, left: 0 }}>
          {
            subjects.map(subject => (
              <a className="dropdown-item ul-widget__link--font" key={subject.id}  onClick={() => setOption(subject.lecture_name)}>{ subject.lecture_name }</a>
            ))
          }  
        </div>
        <button className="btn btn-outline-info btn-sm ml-5" href="#" data-toggle="modal" data-target="#exampleModalLong" >Export PDF</button>
      </div>
      <div className="ul-widget__body"> 
        <div className="ul-widget1">

          <table className="table table-striped dataTable-collapse text-center">
            <thead>
              <tr>
                <th scope="col">Student Name</th>
                <th className='' scope="col">Date</th>
              </tr>
            </thead>

              <tbody>
                {  filtered.map(enrol => (
                          
                  <tr key={ enrol.id }>
                              
                    <td>{ enrol.student.first_name} { enrol.student.last_name}</td>

                    { enrol.attendance.map(attendance => (

                      <td key={attendance.id}>
                        <div style={{ fontSize: '1.2em' }}>{ new Date(attendance.attendance_time).getDate() }/{ new Date(attendance.attendance_time).getMonth() + 1 }/{ new Date(attendance.attendance_time).getFullYear() }</div>
                        <div onClick={() => handleAttendance(attendance.id)}><span className='badge badge-success' style={{ fontSize: '1em' }}>{ attendance.status }</span></div>
                      </td>
                                  
                      )).slice(prev,next) }
                  </tr>
                
                ))}

              { selectedItem &&
                      
                <AttendanceModal 
                id={selectedItem} 
                onClose={handleClose}  
                open={open} />
              }
                      
            </tbody>
          </table>
        </div>

        <div className="dataTables_paginate paging_simple_numbers mt-5 col-md-8 offset-md-4" id="user_table_paginate">
          <ul className="pagination">

            <li className="paginate_button page-item previous" id="user_table_previous">
              <a href="#" aria-controls="user_table" data-dt-idx="0" onClick={handlePrev} className="page-link">Previous</a>
            </li> 

            <li className="paginate_button page-item next" id="user_table_next">
              <a href="#" aria-controls="user_table" data-dt-idx="2" onClick={handleNext}  className="page-link">Next</a>
            </li>

          </ul>
        </div>

      </div>                           
    </div>
  )
}

export default AttendanceList