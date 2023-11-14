import React from 'react'
import ListTable from '../components/ListTable'

function Attendance() {

  


  return (

    <div className="main-content">
        <div className="breadcrumb" style={{ background: '#020381' }}>
            <h1 className="text-white">Students Attendance</h1>
        </div>
        <div className="separator-breadcrumb border-top"></div>
            
        <ListTable />

    </div>
       
  )
}

export default Attendance
