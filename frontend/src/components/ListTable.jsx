import React, { useState, useEffect, useRef } from 'react'
import TableItem from './TableItem'
import axiosClient from "../axios-client.jsx";

function ListTable(props) {

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


    const { enrols, lectures } = props

    const filtered = enrols.filter(enrol => enrol.lecture.lecture_name === option)

  
    useEffect(() => {     
        getStatus()
      }, []);

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

    const checkDate = (currentDate, date) =>{
      if (currentDate.getTime() > date.getTime()) {
        window.confirm("The given date is in the futre, action not allow.")
        console.log('The given date is in the future.');
        return
      }
    }

    const allPresent = ev => {
      ev.preventDefault()
      let checkDate = new Date(presentDate)

      if (checkDate.getTime() > date.getTime()) {
        window.confirm("The given date is in the futre, action not allow.")
        console.log('The given date is in the future.');
        return
      } else {
        console.log(attendance)
        axiosClient.post('/attendances', attendances) 
        .then(() => {
        //console.log(attendance)
        //navigate('/dashboard')
        window.confirm("Attendance successfully done")
      })}
    }

    const onSubmit = ev => {
      ev.preventDefault()
      if (childFormRef.current) {
        childFormRef.current.map(ref => ref.current.handleSubmit());
      }
    }
    
  return (      
    <div className="card col-md-8 offset-md-2">
        <div className="card-body">
            <div className="ul-widget__head">
                <div className="ul-widget__head-label">
                  <h3 className="ul-widget__head-title">Take Attendance: { option }</h3>

                  <input type="date" onChange={ev => setPresentDate(ev.target.value)} className="form-control mb-3 mt-3" id="exampleFormControlInput1" required/>
                 
                  <button className="btn btn-info dropdown-toggle _r_btn border-0 mt-3" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select</button>
                  <div className="dropdown-menu" x-placement="bottom-start" style={{ position: 'absolute', top: 0, left: 0 }}>
                    { lectures.map(lecture => (
                      <a key={lecture.id} className="dropdown-item ul-widget__link--font text-success"  onClick={() => setOption(lecture.lecture_name)}>{ lecture.lecture_name }</a>
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

                        {  filtered.map(enrol => (

                          <TableItem  
                            key={enrol.id} student={enrol.student} 
                            id={enrol.id} presentDate={presentDate} />

                        ))}
                        

                        <div className="d-flex flex-row mt-3">
                          {/* <button className="btn col-md-2 offset-md-2 btn-primary" onClick={onSubmit} >Save</button> */}
                          <button className='btn btn-success col-md-2 offset-md-2' onClick={allPresent} >All Present</button>
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
