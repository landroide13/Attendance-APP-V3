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

    // const [currentPage, setCurrentPage] = useState(1);
    // const [itemsPerPage] = useState(1);

    const filtered =  enrols.filter(enrol => enrol.lecture.lecture_name === option)

    // Get current items
    // const indexOfLastItem = currentPage * itemsPerPage;
    // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // const currentItems = filtered.slice(indexOfFirstItem, indexOfLastItem);

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

    // const pageNumbers = [];
    // for (let i = 1; i <= Math.ceil(filtered.length / itemsPerPage); i++) {
    //   pageNumbers.push(i);
    // }


  return (
    <div className="col-lg-12 col-md-12 col-xl-10 mb-2">

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
      </div>
      <div className="ul-widget__body"> 
        <div className="ul-widget1">

          <table className="table table-striped dataTable-collapse text-center">
            <thead>
              <tr>
                <th scope="col">Student Name</th>
                <th className='' scope="col">Status per Day</th>
              </tr>
            </thead>

              <tbody>
                {  filtered.map(enrol => (
                          
                  <tr key={ enrol.id }>
                              
                    <td>{ enrol.student.first_name} { enrol.student.last_name}</td>

                    { enrol.attendance.map(attendance => (

                      <td key={attendance.id}>
                        <div>{ new Date(attendance.attendance_time).getDate() }/{ new Date(attendance.attendance_time).getMonth() }/{ new Date(attendance.attendance_time).getFullYear() }</div>
                        <div onClick={() => handleAttendance(attendance.id)}><span className='badge badge-success' >{ attendance.status }</span></div>
                      </td>
                                  
                      )) }
                    </tr>
                    ))
                }

              { selectedItem &&
                      
                <AttendanceModal 
                id={selectedItem} 
                onClose={handleClose}  
                open={open} />
                      
              }
                      
            </tbody>
          </table>
        </div>

        <div className="dataTables_paginate paging_simple_numbers mt-5 offset-md-4" id="user_table_paginate">
          <ul className="pagination">
            <li className="paginate_button page-item previous disabled" id="user_table_previous">
              <a href="#" aria-controls="user_table" data-dt-idx="0"  className="page-link">Previous</a>
            </li>

            {/* {pageNumbers.map(number => (

                <li className="paginate_button page-item active">
                  <a onClick={() => setCurrentPage(number)} className="page-link">
                    {number}
                  </a>
                </li>
            ))} */}

            <li className="paginate_button page-item active">
              <a href="#" aria-controls="user_table" data-dt-idx="1"  className="page-link">1</a>
            </li>
            <li className="paginate_button page-item next disabled" id="user_table_next">
              <a href="#" aria-controls="user_table" data-dt-idx="2"  className="page-link">Next</a>
            </li>
          </ul>
        </div>
      </div>                           
    </div>
  )
}

export default AttendanceList