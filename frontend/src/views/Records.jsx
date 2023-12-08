import React, { useState, useEffect } from 'react'
import StripedTable from '../components/StripedTable'
import axiosClient from "../axios-client.jsx";
import LectureTable from '../components/LectureTable.jsx';
import ReportModal from '../components/ReportModal.jsx';

function Records() {

    const [enrols, setEnrols] = useState([])
    const [students, setStudents] = useState([])
    const [lectures, setLectures] = useState([])
    const [date, setDate] = useState('')

    const [option, setOption] = useState('')
    const [loading, setLoading] = useState(false);

    const getStudents = () => {
        setLoading(true)
        axiosClient.get('/students')
          .then(({ data }) => {
            setStudents(data.data)
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
    
      const getEnrols = () => {
        setLoading(true)
        axiosClient.get('/enrol')
          .then(({ data }) => {
            setEnrols(data.data)
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

      const getLectures = () => {
        setLoading(true)
        axiosClient.get('/lectures')
          .then(({ data }) => {
            setLectures(data.data)
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
    
      useEffect(() => {     
        getStudents();
        getEnrols();
        getLectures();
      }, []);

      console.log(date)

  return (
    <div className="main-content">
        <div className="breadcrumb" style={{ background: '#020381' }}>   
            <h1 className="text-white">Attendance Records</h1>
        </div>

        <div className="row">
            <button className="btn btn-info dropdown-toggle _r_btn border-0 ml-3 mb-3" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{ 'Select' }</button>
            <div className="dropdown-menu" x-placement="bottom-start" style={{ position: 'absolute', top: 0, left: 0 }}>
    
                {  enrols.map(enrol => (
                    <>
                        {   enrol.attendance.map(attendance => (
                                <a key={attendance.id} 
                                className="dropdown-item ul-widget__link--font text-success"
                                onClick={() => setDate(attendance.attendance_time)}>
                                  { new Date(attendance.attendance_time).getDate() }-
                                  { new Date(attendance.attendance_time).getMonth() }-
                                  { new Date(attendance.attendance_time).getFullYear() }
                                </a>
                            ))
                        }
                    </>
                    ))
                }
            </div>  
            <h4 className='ml-3'>{ date || null }</h4>
        </div>
        <div className="separator-breadcrumb border-top"></div>
            
        <div className="row">
                
          <StripedTable students={students} enrols={enrols} date={date} />

          <LectureTable lectures={lectures} enrols={enrols} date={date} />

        </div>    

    </div>
  )
}

export default Records