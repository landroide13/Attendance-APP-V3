import React, { useEffect, useState } from 'react'
import axiosClient from "../axios-client.jsx";
import {useStateContext} from "../context/ContextProvider.jsx";


function ListStudent() {

    const [students, setStudent] = useState([])
    const [loading, setLoading] = useState(false);
    const {setNotification} = useStateContext()

    //const [option, setOption] = useState('super_admin');

    const getStudent = () => {
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

    useEffect(() => {     
        getStudent();
      }, []);


  return (
    <div className="col-lg-12 col-md-12 col-xl-10 mb-2">

        <div className="ul-widget__head pb-20 v-margin">
            <div className="ul-widget__head-label">
                <h3 className="ul-widget__head-title">Student List</h3>
            </div>
            <button className="btn btn-info dropdown-toggle _r_btn border-0" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select</button>
            <div className="dropdown-menu" x-placement="bottom-start" style={{ position: 'absolute', top: 0, left: 0 }}>
            <a className="dropdown-item ul-widget__link--font"  onClick={() => setOption('super_admin')}> Super Admin</a>
            <a className="dropdown-item ul-widget__link--font"  onClick={() => setOption('admin')} > Admins</a>
            <a className="dropdown-item ul-widget__link--font"  onClick={() => setOption('tutor')}>Tutors</a>
            </div>
        </div>
        <div className="ul-widget__body">
            <div className="ul-widget1">

                {  students.map(student => (
                    
                    <div className="ul-widget4__item ul-widget4__users" key={ student.id }>
                        <div className="ul-widget4__img"><img id="userDropdown" src="#" alt="" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" /></div>
                        <div className="ul-widget2__info ul-widget4__users-info"><a className="ul-widget2__title" href="#">{ student.first_name } { student.last_name }</a><span className="ul-widget2__username" href="#"></span></div><span className="ul-widget4__number t-font-boldest text-success">+500</span>
                    </div>
                    
                    ))
                }
            </div>
        </div>                     
                    
    </div>
  )
}

export default ListStudent