import React, { useState, useEffect } from 'react'
import axiosClient from "../axios-client.jsx";
import {useStateContext} from "../context/ContextProvider.jsx";

function AttendanceList() {

    const [subjects, setSubjects] = useState([])
    const [option, setOption] = useState('')

    const [date, setDate] = useState(null)
    const [enrols, setEnrol] = useState([])

    const [loading, setLoading] = useState(false);
    const {setNotification} = useStateContext()
    const [errors, setErrors] = useState(null)

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

const filtered =  enrols.filter(enrol => enrol.lecture.lecture_name === option)

console.log(date)

  return (
    <div className="col-lg-12 col-md-12 col-xl-10 mb-2">

            <div className="ul-widget__head pb-20 v-margin">
                <div className="ul-widget__head-label">
                    <h3 className="ul-widget__head-title"> List Attendance</h3>
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

                    {  filtered.map(enrol => (
                        
                        <div className="ul-widget4__item ul-widget4__users" key={ enrol.id }>
                            <div className="ul-widget4__img"><img id="userDropdown" src="#" alt="" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" /></div>
                            <div className="ul-widget2__info ul-widget4__users-info"><a className="ul-widget2__title" href="#">{ enrol.student.first_name} { enrol.student.last_name}</a></div>

                            { enrol.attendance.map(attendance => (
                                <ul key={ enrol.id } class="list-group list-group-horizontal">
                                    <li key={attendance.id}class="list-group-item">{ attendance.date }</li>
                                    <li key={attendance.id} class="list-group-item"><span className={ 'badge, ${attendance.status === Present ? bg-success : bg-danger}'} >{ attendance.status }</span></li>
                                </ul>
                             ))}

                        </div>
                      ))
                     }
                </div>

                <div class="dataTables_paginate paging_simple_numbers mt-5 offset-md-4" id="user_table_paginate">
                  <ul class="pagination">
                    <li class="paginate_button page-item previous disabled" id="user_table_previous">
                      <a href="#" aria-controls="user_table" data-dt-idx="0" tabindex="0" class="page-link">Previous</a>
                    </li>
                    <li class="paginate_button page-item active">
                      <a href="#" aria-controls="user_table" data-dt-idx="1" tabindex="0" class="page-link">1</a>
                    </li>
                    <li class="paginate_button page-item next disabled" id="user_table_next">
                      <a href="#" aria-controls="user_table" data-dt-idx="2" tabindex="0" class="page-link">Next</a>
                    </li>
                  </ul>
                </div>

            </div>                           
    </div>
  )
}

export default AttendanceList