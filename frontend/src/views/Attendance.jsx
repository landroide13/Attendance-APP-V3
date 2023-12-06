import React, { useState, useEffect } from 'react'
import ListTable from '../components/ListTable'
import axiosClient from "../axios-client.jsx";
import {useStateContext} from "../context/ContextProvider.jsx";

function Attendance() {

  const [lectures, setLecture] = useState([])
  const [enrols, setEnrol] = useState([])
  const [option, setOption] = useState('')
  const [loading, setLoading] = useState(false);

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

  const getLectures = () => {
    setLoading(true)
    axiosClient.get('/lectures')
      .then(({ data }) => {
        setLecture(data.data)
        //console.log(data.data)
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
    getEnrol();
    getLectures()
  }, []);



  return (

    <div className="main-content">
        <div className="breadcrumb" style={{ background: '#020381' }}>   
            <h1 className="text-white">Students Attendance</h1>
        </div>
        <div className="separator-breadcrumb border-top"></div>
            
        <ListTable enrols={enrols} lectures={lectures} />      

    </div>
       
  )
}

export default Attendance
