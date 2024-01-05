import React, { useState, useEffect } from 'react'
import axiosClient from "../axios-client.jsx";
import {useStateContext} from "../context/ContextProvider.jsx";

import ItemAttendanceList from './ItemAttendanceList.jsx';

function AttendanceList() {

    const [subjects, setSubjects] = useState([])
    const [option, setOption] = useState('')

    const [loading, setLoading] = useState(false);  
    const {setNotification} = useStateContext()
    const [errors, setErrors] = useState(null)
  
    const filtered =  subjects.filter(subject => subject.id === option)
    
    const [{ attendance } = { }] = filtered.length > 0 ? filtered : [{}] 

    const [{ students } = { }] = filtered.length > 0 ? filtered : [{}] 

    useEffect(() => {     
        getSubjects();
      }, []);

    const studentName = id => { 
      let student = students && students.filter(student => student.id === id)
      const [ data ] = student
      const { first_name, last_name } = data || { }
      return first_name + " " + last_name
    }  

    const convertArrayToCSV = (attendance) => {
      const [{ lecture_name }] = filtered && filtered
      const title = lecture_name + '\n'
      const headers = 'Student Name, Status, Date\n';

      const rows = attendance && attendance.map(att =>
      `${ studentName(att.student_id)}, ${att.status},${ new Date(att.attendance_time).getDate() + '/' + (new Date(att.attendance_time).getMonth() + 1)+ "/" + new Date(att.attendance_time).getFullYear()}`
      ).join('\n');

      return title + headers + rows;
    };

  const downloadCSV = (csvString, filename = 'students.csv') => {
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadCSV = () => {
    const csvData = convertArrayToCSV(attendance);
    downloadCSV(csvData, 'students.csv');
  };

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

  const optionName = id => {
    let subject =  subjects.filter(subject => subject.id === id)
    const [{ lecture_name }] = subject
    return lecture_name
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
              <a className="dropdown-item ul-widget__link--font" key={subject.id}  onClick={() => setOption(subject.id)}>{ subject.lecture_name } / { subject.term.term } - { subject.term.year }</a>
            ))
          }  
        </div>
        <button className="btn btn-outline-info btn-sm ml-5" href="#" data-toggle="modal" data-target="#exampleModalLong" >Export PDF</button>
        <button className="btn btn-outline-info btn-sm ml-5" href="#" data-toggle="modal" data-target="#exampleModalLong" onClick={handleDownloadCSV} >Export CSV</button>
      </div>

      <div className="table-responsive">
        <table className="table text-center table-striped display table-bordered" id="scroll_vertical_table" style={{ width:"100%" }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Student Name</th>
              <th>status</th> 
            </tr>
          </thead>

          <tbody>

            {attendance && attendance.map(att => ( 
              <ItemAttendanceList key={att.id} attendance={att} students={students} />        
            ))}
                    
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default AttendanceList