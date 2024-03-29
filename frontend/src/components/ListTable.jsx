import React, { useState, useEffect, useRef } from 'react'
import TableItem from './TableItem'
import axiosClient from "../axios-client.jsx";

function ListTable(props) {  

    const formRef = useRef([]);

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}/${month}/${year}`;

    const [statuses, setStatus] = useState([])
    const [option, setOption] = useState('')
    const [presentDate, setPresentDate] = useState('')  
   
    const [loading, setLoading] = useState(false);  
    const [errors, setErrors] = useState(null);

    const { lectures } = props

    const filtered = lectures.filter(lecture => lecture.id === option.id)

    const [{ students } = { }] = filtered.length > 0 ? filtered : [{}] 

    const child = students && students.length
    
    useEffect(() => {     
        getStatus();
        formRef.current = formRef.current.slice(0, child);
      }, [child]);

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

    const onDateHandle = ev =>{
      setPresentDate(ev.target.value)
    }

    const onSubmit = ev => {   
      ev.preventDefault()
      formRef.current.forEach(ref => ref.handleSubmit())
    }
    
  return (      
    <div className="card col-md-8 offset-md-2">
        <div className="card-body">
            <div className="ul-widget__head">
                <div className="ul-widget__head-label">
                  <h3 className="ul-widget__head-title">Take Attendance: { option.lecture_name && option.lecture_name  }  </h3>

                  <input type="date" value={presentDate} onChange={onDateHandle} className="form-control mb-3 mt-3" id="exampleFormControlInput1" required/>
                 
                  <button className="btn btn-info dropdown-toggle _r_btn border-0 mt-3" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select</button>
                  <div className="dropdown-menu" x-placement="bottom-start" style={{ position: 'absolute', top: 0, left: 0 }}>
                    { lectures.map(lecture => (
                      <a key={lecture.id} className="dropdown-item ul-widget__link--font text-success"  onClick={() => setOption(lecture)} required>{ lecture.lecture_name } / { lecture.term.term } - { lecture.term.year }</a>
                      ))
                    }    
                  </div>
                </div>
                <div className="ul-widget__head-toolbar">
                    <ul className="nav nav-tabs nav-tabs-line nav-tabs-bold ul-widget-nav-tabs-line ul-widget-nav-tabs-line" role="tablist">
                        <li className="nav-item"><a className="nav-link active" data-bs-toggle="tab" href="#ul-widget2-tab1-content" role="tab">Today {currentDate}</a></li>
                    </ul>
                </div>                                
            </div>
            <div className="ul-widget__body">
                <div className="tab-content">

                  <div className="tab-pane active" id="ul-widget2-tab1-content">
 
                    <div className='d-flex flex-column'>

                      { students && students.map((student, index) => (

                        <TableItem ref={el => formRef.current[index] = el}   
                          key={student.id} student={student} lectureId={option.id}
                          id={student.id} presentDate={presentDate} />
                        ))}
  
                        <div className="d-flex flex-row mt-3">
                          <button className='btn btn-success col-md-2 offset-md-2' onClick={onSubmit}>Save</button>
                        </div>

                      </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListTable
