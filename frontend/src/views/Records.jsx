import React, { useState, useEffect } from 'react'
import StripedTable from '../components/StripedTable'
import axiosClient from "../axios-client.jsx";
import LectureTable from '../components/LectureTable.jsx';

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


  return (
    <div className="main-content">
        <div className="breadcrumb" style={{ background: '#020381' }}>   
            <h1 className="text-white">Attendance Records</h1>
        </div>
        <div className="separator-breadcrumb border-top"></div>
            
        <div className="row">

            <StripedTable students={students} enrols={enrols} />

            <LectureTable lectures={lectures} enrols={enrols} />

        </div>    

    </div>
  )
}

export default Records