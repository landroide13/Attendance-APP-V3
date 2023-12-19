import React, { useEffect, useState } from 'react'
import axiosClient from "../axios-client.jsx";
import {useStateContext} from "../context/ContextProvider.jsx";
import {Link} from "react-router-dom";

function ListStudent() {

    const [students, setStudent] = useState([])
    const [enrols, setEnrol] = useState([])
    const [lectures, setLectures] = useState([])
    const [loading, setLoading] = useState(false);
    const {setNotification} = useStateContext()

    const [option, setOption] = useState('');

    useEffect(() => {     
      getStudents();
      getEnrols();
      getLectures()
    }, []);

    const getStudents = () => {
      setLoading(true)
      axiosClient.get('/students')
        .then(({ data }) => {
          setStudent(data.data)
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

  const filtered = enrols.filter(enrol => enrol.lecture.lecture_id === option.id)

  return (        
    <div className="col-lg-12 col-md-12 col-xl-10 mb-2">

        <div className="ul-widget__head pb-20 v-margin">  
            <div className="ul-widget__head-label">
                <h3 className="ul-widget__head-title">Student List By Subject: <span className='text-success'> { option.lecture_name } </span></h3>
            </div>
            <button className="btn btn-info dropdown-toggle _r_btn border-0" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select</button>
            <div className="dropdown-menu" x-placement="bottom-start" style={{ position: 'absolute', top: 0, left: 0 }}>

            { lectures.map(lecture => (
                <a key={lecture.id} className="dropdown-item ul-widget__link--font text-success"  onClick={() => setOption(lecture)}>{ lecture.lecture_name }</a>
              ))
            }
               
            </div>
        </div>
        <div className="ul-widget__body">
            <div className="ul-widget1">

              { filtered.map(enrol => (
                    
                <div className="ul-widget4__item ul-widget4__users" key={ enrol.id }>
                  <div className="ul-widget4__img"><img id="userDropdown" src="#" alt="" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" /></div>
                  <div className="ul-widget2__info ul-widget4__users-info"><Link className="ul-widget2__title" to={'/manageStudents/' + enrol.student.id}>{ enrol.student.first_name } { enrol.student.last_name }</Link><span className="ul-widget2__username" href="#"></span></div>
                  <button className="btn btn-success mr-3" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Edit</button>
                  <button className="btn btn-danger" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Unenrol</button>          
                </div>

              ))}
            </div>
        </div>                     
                    
    </div>
  )
}

export default ListStudent